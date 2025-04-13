
import React from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Update document title
  React.useEffect(() => {
    document.title = "Vansh Goyal | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-navy">
      {/* Designer background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Gradient orb top right */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/10 rounded-full filter blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        {/* Gradient orb bottom left */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal/5 rounded-full filter blur-[80px] translate-y-1/3 -translate-x-1/3"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMjMzNTU0IiBzdHJva2Utd2lkdGg9Ii4yNSIvPjxwYXRoIGQ9Ik02MCAyMDcuOTVjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwLTE2LjU2OSAwLTMwLTEzLjQzMS0zMC0zMCAwLTE2LjU2OSAxMy40MzEtMzAgMzAtMzAgMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMjMzNTU0IiBzdHJva2Utd2lkdGg9Ii4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMTc3Ljk1KSIvPjxwYXRoIGQ9Ik02MCAzODUuODljMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwLTE2LjU2OSAwLTMwLTEzLjQzMS0zMC0zMCAwLTE2LjU2OSAxMy40MzEtMzAgMzAtMzAgMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMjMzNTU0IiBzdHJva2Utd2lkdGg9Ii4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzU1Ljg5KSIvPjxwYXRoIGQ9Ik02MCA1NjMuODRjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwLTE2LjU2OSAwLTMwLTEzLjQzMS0zMC0zMCAwLTE2LjU2OSAxMy40MzEtMzAgMzAtMzAgMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMjMzNTU0IiBzdHJva2Utd2lkdGg9Ii4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNTMzLjg0KSIvPjxwYXRoIGQ9Ik0xNzcuOTUgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwLTE2LjU2OSAwLTMwLTEzLjQzMS0zMC0zMCAwLTE2LjU2OSAxMy40MzEtMzAgMzAtMzAgMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMjMzNTU0IiBzdHJva2Utd2lkdGg9Ii4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0Ny45NSkiLz48cGF0aCBkPSJNMTc3Ljk1IDIwNy45NWMwIDE2LjU2OS0xMy40MzEgMzAtMzAgMzAtMTYuNTY5IDAtMzAtMTMuNDMxLTMwLTMwIDAtMTYuNTY5IDEzLjQzMS0zMCAzMC0zMCAxNi41NjkgMCAzMCAxMy40MzEgMzAgMzB6IiBzdHJva2U9IiMyMzM1NTQiIHN0cm9rZS13aWR0aD0iLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ3Ljk1IC0xNzcuOTUpIi8+PHBhdGggZD0iTTE3Ny45NSAzODUuODljMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwLTE2LjU2OSAwLTMwLTEzLjQzMS0zMC0zMCAwLTE2LjU2OSAxMy40MzEtMzAgMzAtMzAgMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMjMzNTU0IiBzdHJva2Utd2lkdGg9Ii4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0Ny45NSAtMzU1Ljg5KSIvPjxwYXRoIGQ9Ik0xNzcuOTUgNTYzLjg0YzAgMTYuNTY5LTEzLjQzMSAzMC0zMCAzMC0xNi41NjkgMC0zMC0xMy40MzEtMzAtMzAgMC0xNi41NjkgMTMuNDMxLTMwIDMwLTMwIDE2LjU2OSAwIDMwIDEzLjQzMSAzMCAzMHoiIHN0cm9rZT0iIzIzMzU1NCIgc3Ryb2tlLXdpZHRoPSIuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDcuOTUgLTUzMy44NCkiLz48cGF0aCBkPSJNMzU1Ljg5IDMwYzAgMTYuNTY5LTEzLjQzMSAzMC0zMCAzMC0xNi41NjkgMC0zMC0xMy40MzEtMzAtMzAgMC0xNi41NjkgMTMuNDMxLTMwIDMwLTMwIDE2LjU2OSAwIDMwIDEzLjQzMSAzMCAzMHoiIHN0cm9rZT0iIzIzMzU1NCIgc3Ryb2tlLXdpZHRoPSIuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMjUuODkpIi8+PHBhdGggZD0iTTM1NS44OSAyMDcuOTVjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwLTE2LjU2OSAwLTMwLTEzLjQzMS0zMC0zMCAwLTE2LjU2OSAxMy40MzEtMzAgMzAtMzAgMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMjMzNTU0IiBzdHJva2Utd2lkdGg9Ii4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyNS44OSAtMTc3Ljk1KSIvPjxwYXRoIGQ9Ik0zNTUuODkgMzg1Ljg5YzAgMTYuNTY5LTEzLjQzMSAzMC0zMCAzMC0xNi41NjkgMC0zMC0xMy40MzEtMzAtMzAgMC0xNi41NjkgMTMuNDMxLTMwIDMwLTMwIDE2LjU2OSAwIDMwIDEzLjQzMSAzMCAzMHoiIHN0cm9rZT0iIzIzMzU1NCIgc3Ryb2tlLXdpZHRoPSIuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMjUuODkgLTM1NS44OSkiLz48cGF0aCBkPSJNMzU1Ljg5IDU2My44NGMwIDE2LjU2OS0xMy40MzEgMzAtMzAgMzAtMTYuNTY5IDAtMzAtMTMuNDMxLTMwLTMwIDAtMTYuNTY5IDEzLjQzMS0zMCAzMC0zMCAxNi41NjkgMCAzMCAxMy40MzEgMzAgMzB6IiBzdHJva2U9IiMyMzM1NTQiIHN0cm9rZS13aWR0aD0iLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzI1Ljg5IC01MzMuODQpIi8+PHBhdGggZD0iTTUzMy44NCAzMGMwIDE2LjU2OS0xMy40MzEgMzAtMzAgMzAtMTYuNTY5IDAtMzAtMTMuNDMxLTMwLTMwIDAtMTYuNTY5IDEzLjQzMS0zMCAzMC0zMCAxNi41NjkgMCAzMCAxMy40MzEgMzAgMzB6IiBzdHJva2U9IiMyMzM1NTQiIHN0cm9rZS13aWR0aD0iLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTAzLjg0KSIvPjxwYXRoIGQ9Ik01MzMuODQgMjA3Ljk1YzAgMTYuNTY5LTEzLjQzMSAzMC0zMCAzMC0xNi41NjkgMC0zMC0xMy40MzEtMzAtMzAgMC0xNi41NjkgMTMuNDMxLTMwIDMwLTMwIDE2LjU2OSAwIDMwIDEzLjQzMSAzMCAzMHoiIHN0cm9rZT0iIzIzMzU1NCIgc3Ryb2tlLXdpZHRoPSIuMjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MDMuODQgLTE3Ny45NSkiLz48cGF0aCBkPSJNNTMzLjg0IDM4NS44OWMwIDE2LjU2OS0xMy40MzEgMzAtMzAgMzAtMTYuNTY5IDAtMzAtMTMuNDMxLTMwLTMwIDAtMTYuNTY5IDEzLjQzMS0zMCAzMC0zMCAxNi41NjkgMCAzMCAxMy40MzEgMzAgMzB6IiBzdHJva2U9IiMyMzM1NTQiIHN0cm9rZS13aWR0aD0iLjI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTAzLjg0IC0zNTUuODkpIi8+PHBhdGggZD0iTTUzMy44NCA1NjMuODRjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwLTE2LjU2OSAwLTMwLTEzLjQzMS0zMC0zMCAwLTE2LjU2OSAxMy40MzEtMzAgMzAtMzAgMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMjMzNTU0IiBzdHJva2Utd2lkdGg9Ii4yNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUwMy44NCAtNTMzLjg0KSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>
      
      <Navbar />
      <main className="relative z-10">
        <AboutSection />
        <CertificatesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
