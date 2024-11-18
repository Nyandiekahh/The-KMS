import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import FinanceAnimation from '../components/animations/FinanceAnimation';
import '../styles/home.css';

// Replace external images with placeholders
const testimonialImages = {
  testimonial1: "/api/placeholder/100/100",
  testimonial2: "/api/placeholder/100/100",
  testimonial3: "/api/placeholder/100/100"
};

const newsImages = {
  news1: "/api/placeholder/300/200",
  news2: "/api/placeholder/300/200",
  news3: "/api/placeholder/300/200"
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showCalculator, setShowCalculator] = useState(false);
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(6);
  const [activeTab, setActiveTab] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const calculateMonthlyPayment = () => {
    const rate = 0.2 / 12; // 20% annual rate
    const monthlyPayment = (loanAmount * rate * Math.pow(1 + rate, loanTerm)) / 
                          (Math.pow(1 + rate, loanTerm) - 1);
    return monthlyPayment.toFixed(2);
  };

  const features = [
    {
      title: "Quick Emergency Loans",
      description: "Access funds within 24 hours for urgent needs",
      icon: "🚨",
      color: "#FF6B6B"
    },
    {
      title: "Digital-First Banking",
      description: "Manage your account from anywhere, anytime",
      icon: "📱",
      color: "#4ECDC4"
    },
    {
      title: "Community Support",
      description: "Join a network of like-minded professionals",
      icon: "👥",
      color: "#45B7D1"
    },
    {
      title: "Competitive Returns",
      description: "Earn up to 12% annual returns on your savings",
      icon: "📈",
      color: "#96CEB4"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-shapes">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="floating-shape"
                style={{
                  '--delay': `${Math.random() * 5}s`,
                  '--duration': `${5 + Math.random() * 5}s`,
                  '--size': `${20 + Math.random() * 30}px`
                }}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            <span className="gradient-text">Transform</span> Your Financial Future
          </h1>
          <p className="hero-subtitle">
            Join KMS Sacco for a secure and prosperous tomorrow
          </p>
          
          <div className="hero-features">
            {['Quick Loans', 'High Returns', '24/7 Access', 'Strong Community'].map((feature, index) => (
              <motion.div
                key={feature}
                className="hero-feature-tag"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {feature}
              </motion.div>
            ))}
          </div>

          <div className="hero-cta">
            <motion.button
              className="primary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
                setShowCalculator(true);
              }}
            >
              Calculate Your Loan
            </motion.button>
            
            <motion.button
              className="secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFeature(0)}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <div className="hero-visual">
          <div className="hero-stats" ref={statsRef}>
            {isVisible && (
              <>
                <div className="stat-card">
                  <h3>
                    <CountUp end={5000} duration={2.5} prefix="KSH " separator="," />
                  </h3>
                  <p>Minimum Investment</p>
                </div>
                <div className="stat-card">
                  <h3>
                    <CountUp end={24} duration={2.5} suffix="hrs" />
                  </h3>
                  <p>Loan Processing</p>
                </div>
                <div className="stat-card">
                  <h3>
                    <CountUp end={12} duration={2.5} suffix="%" />
                  </h3>
                  <p>Annual Returns</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="features-showcase">
        <div className="section-title">
          <h2>Why Choose KMS Sacco?</h2>
          <p>Experience the difference with our member-focused approach</p>
        </div>

        <div className="features-container">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="features-swiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="feature-card"
                  style={{ '--card-color': feature.color }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Interactive Loan Calculator */}
      <section id="calculator" className="loan-calculator">
        <div className="calculator-container">
          <div className="calculator-content">
            <h2>Loan Calculator</h2>
            <p>Estimate your monthly payments and see how much you can borrow</p>
            
            <div className="calculator-inputs">
              <div className="input-group">
                <label>Loan Amount (KSH)</label>
                <input
                  type="range"
                  min="5000"
                  max="1000000"
                  step="5000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                />
                <div className="range-value">
                  KSH {loanAmount.toLocaleString()}
                </div>
              </div>

              <div className="input-group">
                <label>Loan Term (Months)</label>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                />
                <div className="range-value">
                  {loanTerm} Months
                </div>
              </div>
            </div>

            <div className="calculator-results">
              <div className="result-card">
                <h4>Monthly Payment</h4>
                <div className="amount">
                  KSH {calculateMonthlyPayment()}
                </div>
              </div>
              <div className="result-card">
                <h4>Total Interest</h4>
                <div className="amount">
                  KSH {((calculateMonthlyPayment() * loanTerm) - loanAmount).toFixed(2)}
                </div>
              </div>
            </div>

            <motion.button 
              className="apply-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
          </div>

          <div className="calculator-visual">
            <FinanceAnimation />
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="membership-benefits">
        <div className="benefits-grid">
          <motion.div 
            className="benefits-content"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Membership Benefits</h2>
            <div className="benefits-tabs">
              {[
                {
                  title: 'Financial Growth',
                  icon: '📈',
                  details: [
                    'Competitive interest rates on savings',
                    'Annual dividend payments',
                    'Investment opportunities',
                    'Financial literacy training'
                  ]
                },
                {
                  title: 'Loan Products',
                  icon: '💰',
                  details: [
                    'Emergency loans within 24 hours',
                    'Development loans up to 3x savings',
                    'Flexible repayment terms',
                    'No hidden fees'
                  ]
                },
                {
                  title: 'Digital Services',
                  icon: '🌐',
                  details: [
                    '24/7 account access',
                    'Mobile banking integration',
                    'Real-time transaction alerts',
                    'Paperless applications'
                  ]
                },
                {
                  title: 'Community',
                  icon: '🤝',
                  details: [
                    'Networking opportunities',
                    'Member workshops',
                    'Business partnerships',
                    'Community projects'
                  ]
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className={`benefit-tab ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="benefit-icon">{benefit.icon}</span>
                  <h3>{benefit.title}</h3>
                  <div className="benefit-details">
                    <ul>
                      {benefit.details.map((detail, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="section-title">
          <h2>How to Join KMS Sacco</h2>
          <p>Simple steps to start your financial journey</p>
        </div>

        <div className="steps-timeline">
          {[
            {
              step: 1,
              title: 'Registration',
              description: 'Complete the online application form with your details',
              icon: '📝',
              amount: 'KSH 500 Registration Fee'
            },
            {
              step: 2,
              title: 'Initial Deposit',
              description: 'Make your first contribution to activate your membership',
              icon: '💵',
              amount: 'KSH 1,000 Minimum'
            },
            {
              step: 3,
              title: 'Share Capital',
              description: 'Invest in your share capital within the first year',
              icon: '🏦',
              amount: 'KSH 5,000'
            },
            {
              step: 4,
              title: 'Account Activation',
              description: 'Get your member number and access your digital account',
              icon: '✅',
              amount: 'To join the sacco, invest KSH 1,500 now, and the share capital withing the next 12 months of joining the sacco'
            }
          ].map((step, index) => (
            <motion.div 
              key={index}
              className="timeline-step"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="step-number">{step.step}</div>
              <div className="step-content">
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="step-amount">{step.amount}</div>
              </div>
              {index < 3 && <div className="step-connector" />}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonials-background">
          <div className="testimonials-overlay"></div>
        </div>
        
        <div className="section-title light">
        <h2>What Our Members Say</h2>
          <p>Join thousands of satisfied members building their future with KMS Sacco</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="testimonials-slider"
        >
          {[
            {
              name: 'John Doe',
              role: 'Business Owner',
              image: testimonialImages.testimonial1,
              quote: 'KMS Sacco helped me expand my business with their quick loan processing and competitive rates.'
            },
            {
              name: 'Jane Smith',
              role: 'Teacher',
              image: testimonialImages.testimonial2,
              quote: 'The financial literacy programs have transformed how I manage my money. Best decision ever!'
            },
            {
              name: 'David Kimani',
              role: 'Software Developer',
              image: testimonialImages.testimonial3,
              quote: 'Their digital-first approach makes banking so convenient. I can manage everything from my phone.'
            }
          ].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                className="testimonial-card"
                whileHover={{ y: -10 }}
              >
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* News & Updates Section */}
      <section className="news-updates">
        <div className="section-title">
          <h2>Latest Updates</h2>
          <p>Stay informed about KMS Sacco news and events</p>
        </div>

        <div className="news-grid">
          {[
            {
              title: 'New Mobile App Launch',
              date: 'March 15, 2024',
              category: 'Technology',
              image: newsImages.news1,
              excerpt: 'Experience seamless banking with our new mobile application.'
            },
            {
              title: 'Financial Workshop Series',
              date: 'March 20, 2024',
              category: 'Education',
              image: newsImages.news2,
              excerpt: 'Join our upcoming workshop series on investment strategies.'
            },
            {
              title: 'Increased Savings Returns',
              date: 'March 25, 2024',
              category: 'Finance',
              image: newsImages.news3,
              excerpt: 'We are excited to announce new competitive rates for savings accounts.'
            }
          ].map((news, index) => (
            <motion.div 
              key={index}
              className="news-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="news-image">
                <img src={news.image} alt={news.title} />
                <span className="news-category">{news.category}</span>
              </div>
              <div className="news-content">
                <span className="news-date">{news.date}</span>
                <h3>{news.title}</h3>
                <p>{news.excerpt}</p>
                <Link to="/news" className="read-more">
                  Read More <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Financial Journey?</h2>
            <p>Join KMS Sacco today and take control of your financial future</p>
            
            <div className="cta-features">
              <div className="cta-feature">
                <span className="feature-icon">🎯</span>
                <span>Quick Registration</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">💰</span>
                <span>Immediate Benefits</span>
              </div>
              <div className="cta-feature">
                <span className="feature-icon">🤝</span>
                <span>Expert Support</span>
              </div>
            </div>

            <div className="cta-buttons">
              <Link to="/register" className="primary-button">
                Join Now
              </Link>
              <button className="secondary-button" onClick={() => setShowContactModal(true)}>
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <div className="modal-header">
                <h3>Contact Us</h3>
                <button 
                  className="close-button"
                  onClick={() => setShowContactModal(false)}
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="icon">📞</span>
                    <a href="tel:+254796611599">+254 796 611 599</a>
                  </div>
                  <div className="contact-item">
                    <span className="icon">✉️</span>
                    <a href="mailto:kms2021.sacco@gmail.com">kms2021.sacco@gmail.com</a>
                  </div>
                  <div className="contact-item">
                    <span className="icon">🕒</span>
                    <span>Mon - Fri, 8:00 AM - 5:00 PM</span>
                  </div>
                </div>
                <div className="contact-form">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Your email" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="How can we help you?"></textarea>
                  </div>
                  <motion.button 
                    className="send-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;