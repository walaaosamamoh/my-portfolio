export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 text-center">
      <p className="text-sm text-text-secondary mb-2">
        Designed & built by{" "}
        <span className="font-medium text-primary">Walaa Osama</span>
      </p>
      <p className="text-sm text-text-secondary">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
