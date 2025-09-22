import { DOM } from "../utils/dom.js";

export function renderSessionInfo(session) {
  if (!DOM.sessionInfo || !session) return;

  DOM.sessionInfo.textContent = `Session expires in: ${session.expiresIn} | ${session.userName}`;
}
