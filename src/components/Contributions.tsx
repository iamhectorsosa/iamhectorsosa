import dayjs from "dayjs";
import { ExternalLinkIcon } from "lucide-react";
import { Tooltip, TooltipProvider } from "./ui/Tooltip";

type GitHubResponse = {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: Array<{
            contributionDays: Array<{
              color: string;
              date: string;
              contributionCount: number;
            }>;
          }>;
        };
      };
    };
  };
};

export const Contributions = async () => {
  const { data }: GitHubResponse = await fetch(
    "https://api.github.com/graphql",
    {
      method: "POST",
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        query: `
      query { 
        user (login: "iamhectorsosa") {
          name
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  color
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
        `,
      }),
      next: { revalidate: 86400 },
    }
  ).then((res) => res.json());
  const firstDate = data.user.contributionsCollection.contributionCalendar.weeks
    .at(0)
    ?.contributionDays.at(0)?.date;

  return (
    <TooltipProvider>
      <h3 className="text-2xl font-semibold tracking-tight">Contributions</h3>
      <p className="leading-7 line-clamp-2">
        {
          data.user.contributionsCollection.contributionCalendar
            .totalContributions
        }{" "}
        contributions in the last year
      </p>
      <div className="space-y-1">
        {firstDate && (
          <p className="text-muted-foreground text-sm">
            {dayjs(firstDate).format("MMMM YY")}
          </p>
        )}
        <div className="grid grid-cols-[repeat(53,minmax(0,1fr))] w-full">
          {data.user.contributionsCollection.contributionCalendar.weeks.map(
            (week, i) => (
              <div key={i}>
                {week.contributionDays.map((days, i) => (
                  <Tooltip
                    key={i}
                    content={`${
                      days.contributionCount
                    } contributions on ${dayjs(days.date).format("ddd D MMM")}`}
                    side="top"
                  >
                    <div
                      className="aspect-square dark:invert border border-transparent hover:border-background"
                      style={{
                        backgroundColor: days.color,
                      }}
                    />
                  </Tooltip>
                ))}
              </div>
            )
          )}
        </div>
      </div>
      <footer className="space-y-1">
        <a
          className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm"
          href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
        >
          How are contributions counted?
          <ExternalLinkIcon className="w-3.5 h-3.5" />
        </a>
      </footer>
    </TooltipProvider>
  );
};
