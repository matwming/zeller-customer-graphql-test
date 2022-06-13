export interface IValueDisplayService {
  value: string;
  onlyFirstLetter?: boolean;
}

const valueDisplayService = ({
  value,
  onlyFirstLetter,
}: IValueDisplayService) => {
  const [firstLetter, ...rest] = value.toLowerCase().split("");
  const firstLetterInCapital = firstLetter.toUpperCase();
  if (onlyFirstLetter) {
    return firstLetterInCapital;
  }
  return [firstLetterInCapital, ...rest].join("");
};

export default valueDisplayService;
