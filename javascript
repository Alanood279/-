/**
 * BuildFlow AI System
 * نظام الذكاء الاصطناعي لبناء المواقع
 */

class BuildFlowAI {
    constructor() {
        this.templates = {
            store: this.generateStore.bind(this),
            blog: this.generateBlog.bind(this),
            portfolio: this.generatePortfolio.bind(this),
            landing: this.generateLanding.bind(this),
            contact: this.generateContact.bind(this),
            about: this.generateAbout.bind(this),
            hero: this.generateHero.bind(this),
            features: this.generateFeatures.bind(this),
            pricing: this.generatePricing.bind(this),
            testimonials: this.generateTestimonials.bind(this)
        };
        
        this.keywords = {
            store: ['متجر', 'تسوق', 'منتجات', 'بيع', 'شراء', 'سلة', 'store', 'shop', 'ecommerce'],
            blog: ['مدونة', 'مقالات', 'تدوين', 'اخبار', 'محتوى', 'blog', 'news'],
            portfolio: ['معرض', 'أعمال', 'مشاريع', 'سيرة', 'cv', 'portfolio', 'works'],
            landing: ['هبوط', 'تسويق', 'منتج', 'عرض', 'landing', 'product'],
            contact: ['تواصل', 'اتصل', 'هاتف', 'ايميل', 'عنوان', 'contact', 'form'],
            about: ['من نحن', 'عن', 'نبذة', 'قصتنا', 'فريق', 'about', 'team'],
            hero: ['رئيسية', 'hero', 'banner', 'main'],
            features: ['مميزات', 'خدمات', 'features', 'services'],
            pricing: ['أسعار', 'خطط', 'اشتراك', 'pricing', 'plans'],
            testimonials: ['آراء', 'تقييمات', 'عملاء', 'testimonials', 'reviews']
        };
    }

    analyze(input) {
        const text = input.toLowerCase();
        const scores = {};
        
        for (const [type, words] of Object.entries(this.keywords)) {
            scores[type] = words.reduce((score, word) => {
                return score + (text.includes(word.toLowerCase()) ? 1 : 0);
            }, 0);
        }
        
        const bestMatch = Object.entries(scores)
            .sort((a, b) => b[1] - a[1])
            .find(([_, score]) => score > 0);
            
        return bestMatch ? bestMatch[0] : 'generic';
    }

    generate(input) {
        const type = this.analyze(input);
        const generator = this.templates[type] || this.generateGeneric;
        
        return {
            type,
            html: generator(input),
            message: `✅ تم إنشاء: ${type}`
        };
    }

    // ===== القوالب =====

    generateStore() {
        return `
            <div class="ai-store">
                <header class="ai-header">
                    <h1>🛍️ متجرك الإلكتروني</h1>
                    <p>اكتشف مجموعتنا المميزة من المنتجات</p>
                </header>
                <div class="ai-products">
                    ${[1,2,3,4].map(i => `
                        <div class="ai-product">
                            <div class="ai-product-img">📦</div>
                            <h3>منتج مميز ${i}</h3>
                            <p class="ai-price">$${99 + i * 20}</p>
                            <button class="ai-btn">أضف للسلة</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    generateBlog() {
        return `
            <div class="ai-blog">
                <header class="ai-header">
                    <h1>📝 مدونتي</h1>
                    <p>أفكار وتجارب يومية</p>
                </header>
                <div class="ai-posts">
                    ${['تقنية', 'تصميم', 'تطوير'].map((cat, i) => `
                        <article class="ai-post">
                            <span class="ai-tag">${cat}</span>
                            <h2>عنوان المقالة ${i + 1}</h2>
                            <p>نص تجريبي للمقالة يمكن تعديله...</p>
                            <div class="ai-meta">📅 12 مارس 2026 · 5 دقائق</div>
                        </article>
                    `).join('')}
                </div>
            </div>
        `;
    }

    generatePortfolio() {
        return `
            <div class="ai-portfolio">
                <div class="ai-profile">
                    <div class="ai-avatar">👨‍💻</div>
                    <h1>اسمك هنا</h1>
                    <p>مطور ويب | مصمم UI/UX</p>
                    <div class="ai-social">
                        <button>تويتر</button>
                        <button>لينكدإن</button>
                        <button>جيتهاب</button>
                    </div>
                </div>
                <h2>المشاريع</h2>
                <div class="ai-projects">
                    ${[1,2,3].map(i => `
                        <div class="ai-project">
                            <div class="ai-project-thumb"></div>
                            <h3>مشروع ${i}</h3>
                            <p>تصميم وتطوير موقع متكامل</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    generateLanding() {
        return `
            <div class="ai-landing">
                <div class="ai-hero-split">
                    <div class="ai-hero-content">
                        <span class="ai-badge">✨ جديد</span>
                        <h1>حلول ذكية لمستقبل أفضل</h1>
                        <p>اكتشف قوة الذكاء الاصطناعي في تطوير عملك</p>
                        <div class="ai-cta">
                            <button class="ai-btn-primary">ابدأ الآن</button>
                            <button class="ai-btn-secondary">شاهد العرض</button>
                        </div>
                    </div>
                    <div class="ai-hero-form">
                        <h3>سجل مجاناً</h3>
                        <input type="email" placeholder="بريدك الإلكتروني">
                        <input type="password" placeholder="كلمة المرور">
                        <button class="ai-btn-primary">إنشاء حساب</button>
                    </div>
                </div>
            </div>
        `;
    }

    generateContact() {
        return `
            <div class="ai-contact">
                <h2>📧 تواصل معنا</h2>
                <form class="ai-form">
                    <div class="ai-form-row">
                        <input type="text" placeholder="الاسم">
                        <input type="email" placeholder="البريد الإلكتروني">
                    </div>
                    <input type="tel" placeholder="رقم الهاتف">
                    <textarea placeholder="رسالتك..." rows="5"></textarea>
                    <button class="ai-btn-primary">إرسال الرسالة</button>
                </form>
                <div class="ai-contact-info">
                    <div>📧 hello@example.com</div>
                    <div>📱 +966 50 000 0000</div>
                    <div>📍 الرياض، السعودية</div>
                </div>
            </div>
        `;
    }

    generateAbout() {
        return `
            <div class="ai-about">
                <div class="ai-about-split">
                    <div>
                        <h2>من نحن</h2>
                        <p>نحن فريق شغوف بتقديم حلول تقنية مبتكرة...</p>
                    </div>
                    <div class="ai-about-img">🚀</div>
                </div>
                <h3>فريقنا</h3>
                <div class="ai-team">
                    ${['أحمد', 'سارة', 'محمد'].map(name => `
                        <div class="ai-member">
                            <div class="ai-member-avatar">${name[0]}</div>
                            <h4>${name}</h4>
                            <p>عضو الفريق</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    generateHero() {
        return `
            <div class="ai-hero-section">
                <h1>عنوان رئيسي مؤثر</h1>
                <p>وصف فرعي يشرح قيمة المنتج أو الخدمة</p>
                <button class="ai-btn-primary">ابدأ الآن</button>
            </div>
        `;
    }

    generateFeatures() {
        return `
            <div class="ai-features-grid">
                ${['⚡ سريع', '🎨 جميل', '🔒 آمن'].map((feat, i) => `
                    <div class="ai-feature-item">
                        <div class="ai-feature-icon">${feat.split(' ')[0]}</div>
                        <h3>${feat.split(' ')[1]}</h3>
                        <p>وصف الميزة ${i + 1} هنا</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    generatePricing() {
        return `
            <div class="ai-pricing-simple">
                ${['مجاني', 'محترف', 'أعمال'].map((plan, i) => `
                    <div class="ai-plan ${i === 1 ? 'ai-plan-popular' : ''}">
                        <h3>${plan}</h3>
                        <div class="ai-plan-price">$${[0, 19, 49][i]}</div>
                        <ul>
                            <li>ميزة 1</li>
                            <li>ميزة 2</li>
                            <li>ميزة 3</li>
                        </ul>
                        <button class="ai-btn-primary">اختر الخطة</button>
                    </div>
                `).join('')}
            </div>
        `;
    }

    generateTestimonials() {
        return `
            <div class="ai-testimonials">
                <h2>💬 آراء العملاء</h2>
                <div class="ai-testimonials-grid">
                    ${[1,2,3].map(i => `
                        <div class="ai-testimonial">
                            <div class="ai-stars">⭐⭐⭐⭐⭐</div>
                            <p>"تجربة رائعة مع الفريق، أنصح الجميع بالتعامل معهم"</p>
                            <div class="ai-client">
                                <div class="ai-client-avatar">👤</div>
                                <div>
                                    <strong>عميل ${i}</strong>
                                    <p>CEO شركة</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    generateGeneric(input) {
        return `
            <div class="ai-generic">
                <h2>${input}</h2>
                <p>تم إنشاء هذا القسم بناءً على طلبك. يمكنك تعديل المحتوى لاحقاً.</p>
                <button class="ai-btn-primary">تعديل القسم</button>
            </div>
        `;
    }
}

// تصدير للاستخدام
const buildflowAI = new BuildFlowAI();
