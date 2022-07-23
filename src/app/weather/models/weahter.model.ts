export interface IWeatherSummary {
    temperature: number;
    humidity: number;
    cloudcover: number;
    weather_descriptions: string[];
    weather_icons: string[];
}

export class WeatherSummary implements IWeatherSummary {
    constructor(
        public temperature: number = 0,
        public humidity: number = 0,
        public cloudcover: number = 0,
        public weather_descriptions: string[] = [],
        public weather_icons: string[] = []
    ) {}
}
