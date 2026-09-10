import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Heart, Sparkles } from 'lucide-react';
// @ts-ignore
import NewONe from "../assets/8775889-uhd_3840_2160_25fps.mp4";


export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: 'wedding',
    guestCount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState('');
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.eventDate) {
      alert('Please fill out all mandatory fields (Name, Phone, and Event Date).');
      return;
    }

    setIsSubmitting(true);

    const subject = `Wedding Inquiry from ${formData.name} - ${formData.eventType.toUpperCase()}`;
    const bodyText = `Hello AV Dream Creations Team,

I would like to inquire about booking photography & videography services:

• Full Name: ${formData.name}
• Mobile Number: ${formData.phone}
• Email Address: ${formData.email || 'N/A'}
• Event Date: ${formData.eventDate}
• Celebration Type: ${formData.eventType}
• Estimated Guest Count: ${formData.guestCount || 'N/A'}

Vision / Message:
${formData.message || 'No additional message.'}

Thank you!
Sent via AV Dream Creations Website`;

    const mailtoUrl = `mailto:avdream518@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    const whatsappText = `*New Event Inquiry - AV Dream Creations*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Event Date:* ${encodeURIComponent(formData.eventDate)}%0A*Type:* ${encodeURIComponent(formData.eventType)}%0A*Guests:* ${encodeURIComponent(formData.guestCount || 'N/A')}%0A*Details:* ${encodeURIComponent(formData.message || 'N/A')}`;
    const whatsappUrl = `https://wa.me/919743644065?text=${whatsappText}`;

    setLastMailtoUrl(mailtoUrl);
    setLastWhatsappUrl(whatsappUrl);

    setTimeout(() => {
      // Trigger default email app
      window.location.href = mailtoUrl;

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventDate: '',
        eventType: 'wedding',
        guestCount: '',
        message: ''
      });
    }, 800);
  };

  const serviceAreas = ['Bangalore', 'Mysore', 'Mandya', 'Tumkur', 'Srirangapatna', 'Channapatna', 'Ramanagara', 'India'];

  return (
    <section id="contact-section" className="py-24  text-neutral-900 relative overflow-hidden border-t border-neutral-100">
      {/* Subtle Background Image watermark */}
      {/* <div className="absolute inset-0 z-0 opacity-[1] pointer-events-none">
        <img
          src={main1}
          alt="Wedding photography background pattern"
          referrerPolicy="no-referrer"
          // className="w-full h-full object-cover"
          className="w-full h-full object-cover  scale-105"
        />
      </div> */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-[500] scale-100"
              >
                <source src={NewONe} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/90 via-neutral-50/50 to-neutral-50/95"></div>
            </div>

      {/* Background overlay circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Column 1: Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-gradient mb-3 font-sans">
                <Heart className="w-3.5 h-3.5 fill-brand-gradient text-brand-gradient" /> Let’s Create Magic
              </span>
              {/* <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight mb-4 leading-tight">
                Get Your Wedding Quote in <span className="italic text-gold">30 Minutes</span>
              </h2> */}
              {/* <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight mb-4 leading-tight">
                Get Your Wedding Quote in <span className="italic text-brand-gradient">30 Minutes</span>
              </h2> */}

            </div>

            {/* Direct Connect Info */}
            <div className="space-y-6">
              <a href="tel:+919743644065" className="flex items-start gap-4 p-4 rounded-md  border border-neutral-200 bg-neutral-50/50 ">
                <div className="bg-neutral-50/50 text-gold p-3 rounded-sm group-hover:bg-gold group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em]  font-bold font-sans">Call Our Experience Desk</h4>
                  <p className="text-base font-semibold font-mono mt-1  group-hover:text-gold transition-colors">+91 97436 44065</p>
                  <p className="text-xs  mt-0.5">Prompt 8:00 AM - 10:00 PM helpline</p>
                </div>
              </a>

              <a href="mailto:avdream518@gmail.com" className="flex items-start gap-4 p-4 rounded-md  border border-neutral-200  bg-neutral-50/50 ">
                <div className="bg-neutral-50/50 text-gold p-3 rounded-sm group-hover:bg-gold group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em]  font-bold font-sans">Send Project Brief</h4>
                  <p className="text-base font-semibold font-mono mt-1  group-hover:text-gold transition-colors">avdream518@gmail.com</p>
                  <p className="text-xs  mt-0.5">Expect response within 1 hour</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-sm  border border-neutral-200 bg-neutral-50/50">
                <div className="bg-neutral-50/50 text-gold p-3 rounded-sm group-hover:bg-gold group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold font-sans">Studio Address</h4>
                  <p className="text-sm font-semibold mt-1  group-hover:text-gold transition-colors">avdreamcreations</p>
                  <p className="text-xs  mt-0.5">98/2, 12th Main Rd, JC Nagar, Kurubarahalli, Kamala Nagar, Bengaluru, Karnataka 560086</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-sm  border border-neutral-200 bg-neutral-50/50">
                <div className="bg-neutral-50/50 text-gold p-3 rounded-sm group-hover:bg-gold ">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em]  font-bold font-sans">Business Hours</h4>
                  <p className="text-sm font-semibold mt-1 ">Monday - Sunday: 8:00 AM - 10:00 PM</p>
                  <p className="text-xs  mt-0.5">Available for physical consultations in Bangalore</p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="space-y-3">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-brand-gradient font-bold font-sans">
                Serving All Karnataka:
              </h4>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area, i) => (
                  <span
                    key={i}
                    className="text-xs bg-neutral-50/50 border border-neutral-200 text-white px-3 py-1.5 rounded-md font-serif"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7 bg-neutral-50/50 border border-neutral-200 rounded-sm p-6 md:p-10 shadow-xl relative text-neutral-900">
            {/* <div className="absolute top-0 right-10 -translate-y-1/2 bg-gold/10 border border-gold/20 px-4 py-1 rounded-sm text-xs font-mono text-gold flex items-center gap-1.5 backdrop-blur-md font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-gold" /> Hey There!
            </div> */}

            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <form id="wedding-inquiry-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white font-sans mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-sm bg-neutral-50/50 border border-neutral-200 focus:border-gold focus:ring-1 focus:ring-gold font-sans text-neutral-800 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white font-sans mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        placeholder="Your Mobile Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-sm bg-neutral-50/50 border border-neutral-200 focus:border-gold focus:ring-1 focus:ring-gold font-sans text-neutral-800 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white font-sans mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-sm bg-neutral-50/50 border border-neutral-200 focus:border-gold focus:ring-1 focus:ring-gold font-sans text-neutral-800 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventDate" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white font-sans mb-2">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        id="eventDate"
                        required
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-sm bg-neutral-50/50 border border-neutral-200 focus:border-gold focus:ring-1 focus:ring-gold font-sans text-neutral-800 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventType" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white font-sans mb-2">
                        Celebration Type
                      </label>
                      <select
                        name="eventType"
                        id="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-sm bg-neutral-50/50 border border-neutral-200 focus:border-gold focus:ring-1 focus:ring-gold font-sans text-neutral-800 text-sm outline-none transition-all cursor-pointer"
                      >
                        <option value="wedding">Wedding Shoot & Film</option>
                        <option value="pre-wedding">Creative Pre-Wedding Shoot</option>
                        <option value="engagement">Engagement Ceremony</option>
                        <option value="house-warming">House Warming Ceremony</option>
                        <option value="baby-shower">Seemantha / Baby Shower</option>
                        <option value="birthday">Milestone Birthday Event</option>
                        <option value="corporate">Corporate Event Coverage</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="guestCount" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white font-sans mb-2">
                        Estimated Guest Count
                      </label>
                      <input
                        type="number"
                        name="guestCount"
                        id="guestCount"
                        placeholder=""
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-sm bg-neutral-50/50 border border-neutral-200 focus:border-gold focus:ring-1 focus:ring-gold font-sans text-neutral-800 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white font-sans mb-2">
                      Tell Us Your Dream Vision
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      placeholder="Share details about your wedding venue, family style, preferred traditional elements, or specific ideas..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-4 rounded-sm bg-neutral-50/50 border border-neutral-200 focus:border-gold focus:ring-1 focus:ring-gold font-sans text-neutral-800 text-sm outline-none resize-none transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    id="submit-inquiry-btn"
                    disabled={isSubmitting}
                    className="w-full bg-brand-gradient hover:bg-brand-gradient-hover text-white font-bold rounded-sm text-[11px] uppercase tracking-widest h-12 md:h-14 flex items-center justify-center transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? 'Securing Your Session...' : 'Submit Interest / Get Quote'}
                  </button>
                </form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 bg-brand-gradient text-white rounded-sm flex items-center justify-center mx-auto shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl md:text-3xl font-light">Inquiry Sent to Email!</h3>
                    <p className="font-sans text-neutral-600 text-sm max-w-md mx-auto">
                      Thank you! Your inquiry details have been prepared for direct delivery to <strong className="text-neutral-800">avdream518@gmail.com</strong>.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
                    {lastMailtoUrl && (
                      <a
                        href={lastMailtoUrl}
                        className="w-full sm:w-auto px-5 py-2.5 bg-brand-gradient text-white text-xs font-bold font-mono rounded-sm hover:opacity-90 transition-all flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4" /> Open Mail Client
                      </a>
                    )}
                    {lastWhatsappUrl && (
                      <a
                        href={lastWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold font-mono rounded-sm transition-all flex items-center justify-center gap-2"
                      >
                        Send on WhatsApp
                      </a>
                    )}
                  </div>

                  <div className="border-t border-neutral-200 pt-6 max-w-sm mx-auto">
                    <p className="text-xs text-neutral-500 uppercase tracking-widest font-mono">Guaranteed Response By</p>
                    <p className="text-lg font-mono text-gold font-semibold mt-1">
                      {new Date(Date.now() + 18 * 60 * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-gold text-xs font-mono tracking-wider hover:underline block mx-auto cursor-pointer"
                  >
                    ← Submit another event inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div id="google-map-container" className="mt-16 rounded-sm overflow-hidden shadow-xl border border-neutral-200 h-[350px] md:h-[450px]">
          <iframe
            src="https://maps.google.com/maps?q=avdreamcreations,%2098/2,%2012th%20Main%20Rd,%20JC%20Nagar,%20Kurubarahalli,%20Kamala%20Nagar,%20Bengaluru,%20Karnataka%20560086&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AV Dream Creations Bangalore Studio Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
