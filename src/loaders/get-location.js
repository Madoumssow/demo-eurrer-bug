export async function getLocation() {
  try {
    const res = await fetch("/api/location");

    // Vérification de la réponse HTTP
    if (res.ok) {
      return await res.json();
    } else {
      // Gestion des réponses de type 4xx ou 5xx
      const errorData = await res.json();
      throw new Error(`Error fetching location: ${errorData.message || res.statusText}`);
    }
  } catch (error) {
    // Gestion des erreurs de réseau ou autres erreurs
    console.error("Failed to fetch location:", error);
    throw new Error("Could not fetch location from edge server");
  }
}
