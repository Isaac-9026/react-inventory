import "./ConfirmDialog.css";

function ConfirmDialog({
  open,
  title,
  message,
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h2>{title}</h2>

        <p>{message}</p>

        <div className="dialog-actions">
          <button onClick={onCancel}>
            Cancelar
          </button>

          <button onClick={onConfirm}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
