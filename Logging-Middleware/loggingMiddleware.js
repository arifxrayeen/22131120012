// Logging Middleware for AffordMed React App
// Sends logs to http://20.244.56.144/evaluation-service/logs

const ALLOWED_STACKS = ["backend", "frontend"];
const ALLOWED_LEVELS = ["debug", "info", "warn", "error", "fatal"];
const ALLOWED_PACKAGES = [
  // Backend only
  "cache", "controller", "cron_job", "db", "domain", "handler", "repository", "route", "service",
  // Frontend only
  "api", "component", "hook", "page", "state", "style",
  // Both
  "auth", "config", "middleware", "utils"
];

// User details and token
const USER_DETAILS = {
  email: "arif.22scse1120013@galgotiasuniversity.edu.in",
  name: "arif rayeen",
  rollNo: "22131120012",
  accessCode: "Muagvq",
  clientID: "eafcaab7-8d66-48eb-94bc-18ac0a782a38",
  clientSecret: "EGbFaXvaXHNPqcJd"
};
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhcmlmLjIyc2NzZTExMjAwMTNAZ2FsZ290aWFzdW5pdmVyc2l0eS5lZHUuaW4iLCJleHAiOjE3NTEwMTQ0NTksImlhdCI6MTc1MTAxMzU1OSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjVjNTllNmQ4LTliYzUtNDk0OS1hZGIyLWEzMzYzZGJiNTMwYiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFyaWYgcmF5ZWVuIiwic3ViIjoiZWFmY2FhYjctOGQ2Ni00OGViLTk0YmMtMThhYzBhNzgyYTM4In0sImVtYWlsIjoiYXJpZi4yMnNjc2UxMTIwMDEzQGdhbGdvdGlhc3VuaXZlcnNpdHkuZWR1LmluIiwibmFtZSI6ImFyaWYgcmF5ZWVuIiwicm9sbE5vIjoiMjIxMzExMjAwMTIiLCJhY2Nlc3NDb2RlIjoiTXVhZ3ZxIiwiY2xpZW50SUQiOiJlYWZjYWFiNy04ZDY2LTQ4ZWItOTRiYy0xOGFjMGE3ODJhMzgiLCJjbGllbnRTZWNyZXQiOiJFR2JGYVh2YVhITlBxY0pkIn0.6dB3myS3Bo1cR_twzvL74rj3zArpgZLm-uxS7OSTaZs";

/**
 * Sends a log to the AffordMed log API.
 * @param {"backend"|"frontend"} stack
 * @param {"debug"|"info"|"warn"|"error"|"fatal"} level
 * @param {string} pkg - package name
 * @param {string} message
 * @returns {Promise<object>} API response
 */
async function log(stack, level, pkg, message) {
  // Validate inputs
  if (!ALLOWED_STACKS.includes(stack)) throw new Error("Invalid stack");
  if (!ALLOWED_LEVELS.includes(level)) throw new Error("Invalid level");
  if (!ALLOWED_PACKAGES.includes(pkg)) throw new Error("Invalid package");
  if (typeof message !== "string" || !message.trim()) throw new Error("Message must be a non-empty string");

  const body = { stack, level, package: pkg, message, ...USER_DETAILS };

  const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${ACCESS_TOKEN}`
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`Logging failed: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

module.exports = log; 