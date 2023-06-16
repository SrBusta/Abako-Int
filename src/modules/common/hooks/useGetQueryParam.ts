import { useRouter } from "next/router";

export const useGetQueryParam = (name?: string) => {
  const { query } = useRouter();
  const value = name ? query[name] : query["id"];

  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
};
