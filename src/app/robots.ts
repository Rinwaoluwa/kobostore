import { type MetadataRoute } from "next";
import { publicUrl } from "@/lib/env.mjs";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: publicUrl + "/sitemap.xml",
	};
}
