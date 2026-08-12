import "./ConfirmDialog.css";
import type { Product } from "../../types/product";

interface ConfirmDialogProps {
  open: boolean;
  product: Product | null;
  isDeleting: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

function ConfirmDialog({
  open,
  product,
  isDeleting,
  onCancel,
  onConfirm,
}: ConfirmDialogProps) {
  if (!open || !product) {
    return null;
  }

  return (
    <div className="confirm-dialog-overlay">
      <div className="confirm-dialog">
        <h3>Eliminar producto</h3>

        <p>
          ¿Estás seguro de que deseas eliminar <strong>{product.nombre}</strong>
          ?
        </p>

        <div className="confirm-dialog-actions">
          <button type="button" onClick={onCancel} disabled={isDeleting}>
            Cancelar
          </button>

          <button type="button" onClick={onConfirm} disabled={isDeleting}>
            {isDeleting ? "Eliminando..." : "Eliminar"}
          </button>
        </div>
      </div>
    </div>
  );
}
