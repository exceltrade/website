import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px' }}>
      <div>
        <div style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(80px,15vw,160px)', fontWeight: 800, color: 'var(--amber)', opacity: 0.12, lineHeight: 1 }}>
          404
        </div>
        <h1 className="d-md" style={{ marginTop: -16, marginBottom: 14 }}>Page Not Found</h1>
        <p className="t-lg c-2" style={{ marginBottom: 28 }}>The page you're looking for doesn't exist or has been moved.</p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-p">Go Home</Link>
          <Link href="/contact" className="btn btn-o">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
