import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '120px', fontWeight: 800, color: 'var(--accent)', opacity: 0.2, lineHeight: 1 }}>404</div>
        <h1 className="display-md" style={{ marginTop: -20, marginBottom: 16 }}>Page Not Found</h1>
        <p className="text-lg text-secondary" style={{ marginBottom: 32 }}>The page you're looking for doesn't exist or has been moved.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <Link href="/" className="btn btn-primary">Go Home</Link>
          <Link href="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
