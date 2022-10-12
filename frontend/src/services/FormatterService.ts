export const FormatterService = {
    monetaryValue(value: number): string{
        return value.toLocaleString(
            "en-US", 
            {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "USD",
            }
        );
    },
    limitText(text:string, maxSize:number):string{
        if (text.length < maxSize) {
            return text;
        }
        return text.slice(0,maxSize) + "...";
    }
}