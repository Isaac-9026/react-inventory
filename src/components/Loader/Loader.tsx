interface LoaderProps {
  message?: string;
}

function Loader({ message = "Cargando..." }: LoaderProps) {
  return <p>{message}</p>;
}
