import { clsx, type ClassValue } from "clsx";
import moment from "moment";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentDateTime() {
  const now = new Date();

  // Using moment to format the date and time
  const date_added = moment(now).format("YYYY-MM-DD");
  const time = moment(now).format("HH:mm:ss");

  return {
    date_added,
    time,
  };
}
export const generateId = (length: number = 14): string => {
  let result = "";
  const characters = "ab_cdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let index = 0; index < length; index++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export const getApiBaseUrl = (): string => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  return apiUrl;
};

export function getApiUrl(
  endpoint: string,
  parameters: Record<string, string | number> = {},
): string {
  const baseUrl = getApiBaseUrl();
  const queryParameters = new URLSearchParams();

  for (const [key, value] of Object.entries(parameters)) {
    queryParameters.append(key, String(value));
  }

  const queryString = queryParameters.toString();
  return queryString
    ? `${baseUrl}${endpoint}?${queryString}`
    : `${baseUrl}${endpoint}`;
}

/**
 * Returns a simulated promise that resolves after the specified number of seconds.
 *
 * @param sec The number of seconds to wait before resolving the promise.
 * @returns A promise that resolves after the specified number of seconds.
 */
export const simulateDelay = (sec: number) =>
  new Promise((resolve) => setTimeout(resolve, sec * 1000));

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "BDT";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {},
) {
  const { currency = "USD", notation = "compact" } = options;

  const numericPrice =
    typeof price === "string" ? Number.parseFloat(price) : price;
  const newPrice = new Intl.NumberFormat("en-US", {
    currency,
    notation,
    style: "currency",
    maximumFractionDigits: 2,
  }).format(numericPrice);
  return newPrice;
}

const letters = "!ABCDEFGHIJKLMNOPQRSTUVWXYZ#";

export const handleMouseEnter = (event: MouseEvent) => {
  if (!event) return;
  const element = event.target as HTMLDivElement;
  let iteration: number = 0;
  const speed: number = element.dataset.value!.length > 7 ? 30 : 60;

  let lastTimestamp: number;
  let animationFrameId: number | null;

  const animate = (timestamp: number) => {
    if (!lastTimestamp) {
      lastTimestamp = timestamp;
    }

    // deltaTime is the time elapsed since the last animation frame
    // I use am to reduce or increase speed
    const deltaTime = timestamp - lastTimestamp;

    if (deltaTime >= speed) {
      // @ts-expect-error Hacking the type
      element!.textContent! = [...element!.textContent!]
        .map((_: string, index: number) => {
          if (index < iteration) {
            return element.dataset.value![index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= element.dataset.value!.length) {
        // Stop the animation if completed
        return;
      }

      iteration += 1 / 3;
      lastTimestamp = timestamp;
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  cancelAnimationFrame(animationFrameId!);
  animationFrameId = requestAnimationFrame(animate);
};
