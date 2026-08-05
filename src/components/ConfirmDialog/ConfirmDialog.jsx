import "./ConfirmDialog.css";
import { useEffect } from "react";

function ConfirmDialog({ open, title, message, onConfirm, onCancel }) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onCancel();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div className="dialog-overlay" onClick={onCancel}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>

        <p>{message}</p>

        <div className="dialog-actions">
          <button onClick={onCancel}>Cancelar</button>

          <button onClick={onConfirm}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
