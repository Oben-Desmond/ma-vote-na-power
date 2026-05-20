import { useEffect, useState } from "react";
import { subscribeRecentComments } from "../lib/blogEngagement";
import { isFirebaseConfigured } from "../config/firebase";

export function useRecentComments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(isFirebaseConfigured);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setLoading(false);
      return undefined;
    }

    return subscribeRecentComments(
      (items) => {
        setComments(items);
        setLoading(false);
      },
      () => setLoading(false)
    );
  }, []);

  return { comments, loading, configured: isFirebaseConfigured };
}
