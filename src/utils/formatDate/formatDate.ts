export function formatedData(data: Date): string {
    const formated = new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(data);
  
    return formated.charAt(0).toUpperCase() + formated.slice(1);
  }
  EU n