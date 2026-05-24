1. Copy the uploaded L&T EduTech badge image to `public/lovable-uploads/lt-edutech-java-spring.png`.
2. In `src/components/sections/CertificatesSection.tsx`, append a new entry to the `certificates` array:
   - title: "Java Programming and Spring Boot Development"
   - issuer: "L&T EduTech (LearnKonnect)"
   - date: "2024"
   - description: Short note about completing the Course Pathway Evaluation covering Java programming fundamentals and Spring Boot backend development.
   - image: the new uploaded path

No other changes. Existing "View Certificate" zoom dialog will work automatically.

Note on skills: A previous instruction asked to only show skills shared across all projects/certs. Adding Java/Spring Boot here means those won't appear in skills unless they also relate to your projects — let me know if you'd like the skills filter relaxed to include certificate-specific skills like Java and Spring Boot.