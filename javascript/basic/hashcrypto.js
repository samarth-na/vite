import { createHash } from "crypto";

function hash(input) {
	return createHash("sha256").update(input).digest("hex");
}
hash("hello world");
