export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("config", GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type EventParams = Record<string, string | number | boolean>;

export const event = ({
    action,
    category,
    label,
    value,
    ...rest
}: {
    action: string;
    category?: string;
    label?: string;
    value?: number;
} & EventParams) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
            ...rest,
        });
    }
};

export function trackSectionView(section: string) {
    event({
        action: "section_view",
        section,
    });
}

export function trackEvent(name: string, params: EventParams = {}) {
    event({
        action: name,
        ...params,
    });
}
