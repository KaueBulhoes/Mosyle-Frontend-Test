/**
 * Componente de Sessão
 */

import { DOM } from "../utils/dom.js";

/**
 * Renderiza informações da sessão
 * @param {Object} session - Dados da sessão
 */
export function renderSessionInfo(session) {
  if (!DOM.sessionInfo || !session) return;

  DOM.sessionInfo.textContent = `Session expires in: ${session.expiresIn} | ${session.userName}`;
}
