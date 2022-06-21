export interface Icategories {
  id: number;
  name: string;
  entreeLists: [
        { Entree: string, Portion: number },
        { Entree: string, Portion: number }
  ];
}
