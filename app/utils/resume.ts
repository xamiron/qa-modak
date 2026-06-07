import { personal } from "../data";

const RESUME_FILENAME = "Sabuj_Kumar_Modak_QA.pdf";

export function openResumeInNewTabAndDownload() {
  window.open(personal.resume, "_blank", "noopener,noreferrer");

  const link = document.createElement("a");
  link.href = personal.resume;
  link.download = RESUME_FILENAME;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
