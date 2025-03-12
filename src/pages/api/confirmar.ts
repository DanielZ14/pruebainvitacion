import type { APIRoute } from 'astro';
import { db } from '../../lib/firebase.js';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const idInvitado = formData.get('idInvitado')?.toString();
    const nombreInvitado = formData.get('nombreInvitado')?.toString();
    const pasesDisponibles = Number(formData.get('pasesDisponibles'));
    const confirma = formData.get('confirma') === 'si';

    if (!idInvitado || !nombreInvitado || Number.isNaN(pasesDisponibles)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Datos de invitado inválidos.',
        }),
        { status: 400 }
      );
    }

    // Check for previous confirmation
    const docRef = doc(db, 'confirmaciones', idInvitado);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return new Response(
        JSON.stringify({
          success: true,
          message: data.asistencia
            ? `Ya confirmaste asistencia para ${data.asistentesConfirmados} persona${data.asistentesConfirmados === 1 ? '' : 's'}. ¡Nos vemos!`
            : 'Lamentamos que no puedas asistir.',
        })
      );
    }

    if (confirma) {
      const asistentesStr = formData.get('asistentes')?.toString() || '0';
      const asistentesConfirmados = Number.parseInt(asistentesStr, 10);

      if (Number.isNaN(asistentesConfirmados) || asistentesConfirmados < 1 || asistentesConfirmados > pasesDisponibles) {
        return new Response(
          JSON.stringify({
            success: false,
            message: `Por favor, ingresa un número válido de asistentes (entre 1 y ${pasesDisponibles}).`,
          }),
          { status: 400 }
        );
      }

      await setDoc(docRef, {
        nombre: nombreInvitado,
        asistencia: true,
        asistentesConfirmados,
        timestamp: new Date(),
        pases: pasesDisponibles,
      });

      return new Response(
        JSON.stringify({
          success: true,
          message: `¡Gracias por confirmar la asistencia de ${asistentesConfirmados} persona${asistentesConfirmados === 1 ? '' : 's'}!`,
        })
      );
    }

    await setDoc(docRef, {
      nombre: nombreInvitado,
      asistencia: false,
      asistentesConfirmados: 0,
      timestamp: new Date(),
      pases: pasesDisponibles,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Lamentamos que no puedas asistir.',
      })
    );
  } catch (error) {
    console.error('Error al procesar la confirmación:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Hubo un error al procesar tu solicitud. Por favor, intenta de nuevo.',
      }),
      { status: 500 }
    );
  }
}; 