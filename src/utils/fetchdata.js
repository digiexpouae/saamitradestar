export const safeFetchJson = async (url, fallback = []) => {
    try {
        const res = await fetch(url);

        // If fetch succeeded, but server responded with error

        if (!res.ok) {
            // HTTP errors like 404/500
            return { success: false, error: `HTTP error: ${res.status} ${res.statusText}` };
        }
        // Try parsing JSON (some APIs might return empty or invalid JSON)
        return res;

    } catch (err) {
        // Network error or CORS issue
        console.error("Network / fetch failed:", err);
        return fallback;
    }
};