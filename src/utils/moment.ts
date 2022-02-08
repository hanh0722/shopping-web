import moment, {unitOfTime} from "moment";

export const parseTimeByMilliseconds = (milliseconds: number, typeParsed?: unitOfTime.DurationConstructor) => {
    const time = moment.duration(milliseconds, typeParsed || 'milliseconds');
    return {
        years: time.years(),
        months: time.months(),
        weeks: time.weeks(),
        days: time.days(),
        hours: time.hours(),
        minutes: time.minutes(),
        seconds: time.seconds(),
        millisecond: time.milliseconds(),
    }
}