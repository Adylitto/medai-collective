import React, { useState } from 'react';
    import './App.css';

    const translations = {
      en: {
        header: "MedAI Collective",
        subheader: "Decentralized solutions for healthcare professionals",
        overviewTitle: "Project Overview",
        overviewText: "MedAI Collective is a decentralized AI application designed to assist healthcare professionals in managing administrative tasks efficiently while ensuring data security.",
        featuresTitle: "Key Features",
        features: [
          "Accurate speech-to-text transcription",
          "Patient file management",
          "Decentralized data storage",
          "Secure authentication",
          "Customizable report templates",
          "User-friendly interface"
        ],
        useCasesTitle: "Use Cases",
        useCasesText: "Discover how MedAI Collective can transform your practice:",
        useCases: [
          "Streamline patient documentation with accurate speech-to-text transcription.",
          "Securely manage patient records with decentralized storage solutions.",
          "Participate in platform governance through our DAO structure."
        ],
        testimonialsTitle: "Doctors' Testimonials",
        testimonials: [
          { text: "MedAI Collective has revolutionized my administrative tasks. It's a real asset!", author: "Dr. Emily Johnson" },
          { text: "The decentralized approach ensures my patients' data is secure and compliant.", author: "Dr. Michael Smith" }
        ],
        ctaTitle: "Join Us",
        ctaText: "Be part of the future of healthcare administration. Join MedAI Collective today!",
        ctaButton: "Get Started",
        footer: "All rights reserved."
      },
      de: {
        header: "MedAI Collective",
        subheader: "Dezentralisierte Lösungen für Gesundheitsfachleute",
        overviewTitle: "Projektübersicht",
        overviewText: "MedAI Collective ist eine dezentrale KI-Anwendung, die entwickelt wurde, um Gesundheitsfachleuten bei der effizienten Verwaltung administrativer Aufgaben zu helfen und gleichzeitig die Datensicherheit zu gewährleisten.",
        featuresTitle: "Hauptmerkmale",
        features: [
          "Genaues Sprach-zu-Text-Transkription",
          "Patientendateiverwaltung",
          "Dezentralisierte Datenspeicherung",
          "Sichere Authentifizierung",
          "Anpassbare Berichtsvorlagen",
          "Benutzerfreundliche Oberfläche"
        ],
        useCasesTitle: "Anwendungsfälle",
        useCasesText: "Entdecken Sie, wie MedAI Collective Ihre Praxis transformieren kann:",
        useCases: [
          "Vereinfachen Sie die Patientendokumentation mit genauer Sprach-zu-Text-Transkription.",
          "Verwalten Sie Patientendaten sicher mit dezentralen Speicherlösungen.",
          "Nehmen Sie an der Plattform-Governance durch unsere DAO-Struktur teil."
        ],
        testimonialsTitle: "Ärztliche Testimonials",
        testimonials: [
          { text: "MedAI Collective hat meine administrativen Aufgaben revolutioniert. Es ist ein echter Gewinn!", author: "Dr. Emilie Dupont" },
          { text: "Der dezentrale Ansatz gewährleistet die Sicherheit und Konformität der Daten meiner Patienten.", author: "Dr. Michel Martin" }
        ],
        ctaTitle: "Treten Sie uns bei",
        ctaText: "Seien Sie Teil der Zukunft der Gesundheitsverwaltung. Treten Sie noch heute MedAI Collective bei!",
        ctaButton: "Loslegen",
        footer: "Alle Rechte vorbehalten."
      },
      it: {
        header: "MedAI Collective",
        subheader: "Soluzioni decentralizzate per i professionisti della salute",
        overviewTitle: "Panoramica del Progetto",
        overviewText: "MedAI Collective è un'applicazione AI decentralizzata progettata per assistere i professionisti della salute nella gestione efficiente delle attività amministrative garantendo al contempo la sicurezza dei dati.",
        featuresTitle: "Caratteristiche Principali",
        features: [
          "Trascrizione vocale accurata",
          "Gestione dei file dei pazienti",
          "Archiviazione dati decentralizzata",
          "Autenticazione sicura",
          "Modelli di report personalizzabili",
          "Interfaccia intuitiva"
        ],
        useCasesTitle: "Casi d'Uso",
        useCasesText: "Scopri come MedAI Collective può trasformare la tua pratica:",
        useCases: [
          "Semplifica la documentazione dei pazienti con una trascrizione vocale accurata.",
          "Gestisci in modo sicuro i record dei pazienti con soluzioni di archiviazione decentralizzate.",
          "Partecipa alla governance della piattaforma attraverso la nostra struttura DAO."
        ],
        testimonialsTitle: "Testimonianze dei Medici",
        testimonials: [
          { text: "MedAI Collective ha rivoluzionato le mie attività amministrative. È una vera risorsa!", author: "Dr. Emilie Dupont" },
          { text: "L'approccio decentralizzato garantisce la sicurezza e la conformità dei dati dei miei pazienti.", author: "Dr. Michel Martin" }
        ],
        ctaTitle: "Unisciti a noi",
        ctaText: "Fai parte del futuro dell'amministrazione sanitaria. Unisciti a MedAI Collective oggi stesso!",
        ctaButton: "Inizia",
        footer: "Tutti i diritti riservati."
      }
    };

    function App() {
      const [language, setLanguage] = useState('en');

      const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
      };

      const t = translations[language];

      return (
        <div className="app">
          <header className="header">
            <h1>{t.header}</h1>
            <p>{t.subheader}</p>
            <select onChange={handleLanguageChange} value={language} className="language-switcher">
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="it">Italiano</option>
            </select>
          </header>
          <main>
            <section className="overview">
              <h2>{t.overviewTitle}</h2>
              <p>{t.overviewText}</p>
            </section>
            <section className="features">
              <h2>{t.featuresTitle}</h2>
              <ul>
                {t.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
            <section className="use-cases">
              <h2>{t.useCasesTitle}</h2>
              <p>{t.useCasesText}</p>
              <ul>
                {t.useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
            </section>
            <section className="testimonials">
              <h2>{t.testimonialsTitle}</h2>
              {t.testimonials.map((testimonial, index) => (
                <blockquote key={index}>
                  <p>"{testimonial.text}"</p>
                  <cite>- {testimonial.author}</cite>
                </blockquote>
              ))}
            </section>
            <section className="cta">
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaText}</p>
              <button>{t.ctaButton}</button>
            </section>
          </main>
          <footer className="footer">
            <p>&copy; 2023 MedAI Collective. {t.footer}</p>
          </footer>
        </div>
      );
    }

    export default App;
