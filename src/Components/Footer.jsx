import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5 d-flex align-items-center justify-content-center"style={{height:"130px",fontSize:"30px"}}>
      <small>© {new Date().getFullYear()} Pavan Kumar Ravula. All Rights Reserved.</small>
    </footer>
  );
}