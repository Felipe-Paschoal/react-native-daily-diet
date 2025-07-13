export interface MealDTO {
  id: string;
  name: string;
  description?: string;
  date: Date;
  isInDiet: boolean;
}
