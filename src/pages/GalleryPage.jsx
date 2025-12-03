import { Instagram } from 'lucide-react';
import '../styles/GalleryPage.css';

export default function GalleryPage() {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
      alt: 'Gourmet plated dish',
      category: 'Dishes'
    },
    {
      src: 'https://images.unsplash.com/photo-1504674900945-ab22fe8c31f5?w=400&h=400&fit=crop',
      alt: 'Restaurant dining area',
      category: 'Ambiance'
    },
    {
      src: 'https://images.unsplash.com/photo-1552566626-52f8b0543831?w=400&h=400&fit=crop',
      alt: 'Cozy restaurant interior',
      category: 'Ambiance'
    },
    {
      src: 'https://images.unsplash.com/photo-1583270335223-14ad11cc5caa?w=400&h=400&fit=crop',
      alt: 'Chef preparing food',
      category: 'Kitchen'
    },
    {
      src: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=400&fit=crop',
      alt: 'Fresh ingredients',
      category: 'Ingredients'
    },
    {
      src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
      alt: 'Signature appetizer',
      category: 'Dishes'
    },
    {
      src: 'https://images.unsplash.com/photo-1504674900945-ab22fe8c31f5?w=400&h=400&fit=crop',
      alt: 'Dessert platter',
      category: 'Dishes'
    },
    {
      src: 'https://images.unsplash.com/photo-1552566626-52f8b0543831?w=400&h=400&fit=crop',
      alt: 'Bar and seating area',
      category: 'Ambiance'
    },
    {
      src: 'https://images.unsplash.com/photo-1583270335223-14ad11cc5caa?w=400&h=400&fit=crop',
      alt: 'Kitchen in action',
      category: 'Kitchen'
    },
    {
      src: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=400&fit=crop',
      alt: 'Market fresh produce',
      category: 'Ingredients'
    },
    {
      src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
      alt: 'Main course presentation',
      category: 'Dishes'
    },
    {
      src: 'https://images.unsplash.com/photo-1504674900945-ab22fe8c31f5?w=400&h=400&fit=crop',
      alt: 'Evening ambiance',
      category: 'Ambiance'
    }
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Gallery</h1>
        <p>A visual journey through TIdye</p>
      </div>

      <div className="gallery-intro">
        <p>
          Explore our restaurant through beautiful photography. From our carefully plated dishes to our warm ambiance,
          see why TIdye is the perfect destination for unforgettable dining.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, idx) => (
          <div key={idx} className="gallery-item">
            <div className="gallery-image-wrapper">
              <img 
                src={image.src} 
                alt={image.alt}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <p className="gallery-category">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="gallery-cta">
        <h2>Experience It in Person</h2>
        <p>These photos can't capture the full TIdye experience. Come dine with us!</p>
        <div className="cta-buttons">
          <a href="/contact" className="cta-btn primary">Make Reservation</a>
          <a href="/menu" className="cta-btn secondary">View Menu</a>
        </div>
      </section>

      <section className="instagram-section">
        <h2>Follow Us on Instagram</h2>
        <p>@tidye - Tag us in your dining photos for a chance to be featured!</p>
        <div className="instagram-placeholder">
          <Instagram size={48} style={{ marginBottom: '15px' }} />
          <p>Follow @tidye on Instagram</p>
        </div>
      </section>
    </div>
  );
}
