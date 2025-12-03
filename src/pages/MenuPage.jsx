import { useState } from 'react';
import { Utensils, Beef, Cake, Wine } from 'lucide-react';
import '../styles/MenuPage.css';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('appetizers');

  const menuData = {
    appetizers: [
      {
        name: 'Crispy Calamari',
        description: 'Golden fried squid with marinara sauce and fresh lemon',
        price: 'MK 14,300'
      },
      {
        name: 'Bruschetta al Pomodoro',
        description: 'Toasted bread with tomatoes, garlic, basil, and olive oil',
        price: 'MK 12,100'
      },
      {
        name: 'Shrimp Saganaki',
        description: 'Sautéed shrimp with feta cheese and tomato sauce',
        price: 'MK 16,500'
      },
      {
        name: 'Stuffed Mushrooms',
        description: 'Portobello mushrooms filled with herbs, cheese, and breadcrumbs',
        price: 'MK 13,200'
      }
    ],
    mains: [
      {
        name: 'Signature Ribeye Steak',
        description: 'Premium 12oz cut grilled to perfection, served with seasonal vegetables and truffle mashed potatoes',
        price: 'MK 38,500'
      },
      {
        name: 'Pan-Seared Salmon',
        description: 'Fresh Atlantic salmon with lemon butter sauce, asparagus, and wild rice',
        price: 'MK 31,900'
      },
      {
        name: 'Pasta Carbonara',
        description: 'Traditional Italian pasta with pancetta, egg yolk, and aged parmesan',
        price: 'MK 20,900'
      },
      {
        name: 'Chicken Piccata',
        description: 'Tender chicken breast with capers, lemon sauce, and garlic over angel hair pasta',
        price: 'MK 25,300'
      },
      {
        name: 'Lamb Chops',
        description: 'Herb-marinated lamb chops with rosemary jus, served with gratin potatoes',
        price: 'MK 36,300'
      },
      {
        name: 'Risotto ai Funghi',
        description: 'Creamy arborio rice with wild mushrooms, truffle oil, and parmesan',
        price: 'MK 22,000'
      }
    ],
    desserts: [
      {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with layers of mascarpone, espresso, and cocoa',
        price: 'MK 9,900'
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
        price: 'MK 11,000'
      },
      {
        name: 'Panna Cotta',
        description: 'Silky Italian cream dessert with berry coulis and fresh berries',
        price: 'MK 9,900'
      },
      {
        name: 'Cannoli Siciliani',
        description: 'Traditional Sicilian pastry tubes filled with sweet ricotta and chocolate chips',
        price: 'MK 8,800'
      }
    ],
    drinks: [
      {
        name: 'House Wine Selection',
        description: 'Curated selection of Italian and California wines',
        price: 'by glass/bottle'
      },
      {
        name: 'Signature Cocktails',
        description: 'Craft cocktails made with premium spirits',
        price: 'MK 14,300'
      },
      {
        name: 'Espresso',
        description: 'Premium espresso shots',
        price: 'MK 4,400'
      },
      {
        name: 'Fresh Lemonade',
        description: 'Homemade fresh lemon juice with sparkling water',
        price: 'MK 6,600'
      }
    ]
  };

  const categories = [
    { id: 'appetizers', label: 'Appetizers', icon: Utensils },
    { id: 'mains', label: 'Main Courses', icon: Beef },
    { id: 'desserts', label: 'Desserts', icon: Cake },
    { id: 'drinks', label: 'Drinks', icon: Wine }
  ];

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Carefully curated dishes made with fresh, local ingredients</p>
      </div>

      <div className="menu-container">
        <aside className="menu-categories">
          {categories.map(cat => {
            const IconComponent = cat.icon;
            return (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <IconComponent size={20} style={{ marginRight: '8px' }} />
                {cat.label}
              </button>
            );
          })}
        </aside>

        <section className="menu-items">
          <h2 className="category-title">
            {categories.find(c => c.id === selectedCategory)?.label}
          </h2>
          <div className="items-grid">
            {menuData[selectedCategory].map((item, idx) => (
              <div key={idx} className="menu-item">
                <div className="item-header">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="menu-cta">
        <h2>Ready to Order?</h2>
        <p>Reserve your table or place an order online</p>
        <a href="/contact" className="menu-cta-btn">Contact Us</a>
      </section>
    </div>
  );
}
