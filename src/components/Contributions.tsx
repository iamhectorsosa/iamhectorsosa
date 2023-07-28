import dayjs from "dayjs";
import { ExternalLinkIcon } from "lucide-react";
import { Tooltip, TooltipProvider } from "./ui/Tooltip";

type GitHubResponse = {
  data: {
    user: {
      contributionsCollection: {
        totalRepositoryContributions: number;
        totalCommitContributions: number;
        totalIssueContributions: number;
        totalPullRequestContributions: number;
        totalPullRequestReviewContributions: number;
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
            totalRepositoryContributions
            totalCommitContributions
            totalIssueContributions
            totalPullRequestContributions
            totalPullRequestReviewContributions
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

  const totalContributions =
    data.user.contributionsCollection.totalCommitContributions +
    data.user.contributionsCollection.totalIssueContributions +
    data.user.contributionsCollection.totalPullRequestContributions +
    data.user.contributionsCollection.totalPullRequestReviewContributions +
    data.user.contributionsCollection.totalRepositoryContributions;

  const contributions = [
    {
      label: "Commits",
      count: data.user.contributionsCollection.totalCommitContributions,
      percentage: Math.floor(
        (data.user.contributionsCollection.totalCommitContributions /
          totalContributions) *
          100
      ),
    },
    {
      label: "Issues",
      count: data.user.contributionsCollection.totalIssueContributions,
      percentage: Math.floor(
        (data.user.contributionsCollection.totalIssueContributions /
          totalContributions) *
          100
      ),
    },
    {
      label: "Pull Requests",
      count: data.user.contributionsCollection.totalPullRequestContributions,
      percentage: Math.floor(
        (data.user.contributionsCollection.totalPullRequestContributions /
          totalContributions) *
          100
      ),
    },
    {
      label: "Code Reviews",
      count:
        data.user.contributionsCollection.totalPullRequestReviewContributions,
      percentage: Math.floor(
        (data.user.contributionsCollection.totalPullRequestReviewContributions /
          totalContributions) *
          100
      ),
    },
    {
      label: "Repos Created",
      count: data.user.contributionsCollection.totalRepositoryContributions,
      percentage: Math.floor(
        (data.user.contributionsCollection.totalRepositoryContributions /
          totalContributions) *
          100
      ),
    },
  ];

  return (
    <TooltipProvider>
      <div className="space-y-3">
        <p className="leading-7 line-clamp-2">
          {
            data.user.contributionsCollection.contributionCalendar
              .totalContributions
          }{" "}
          contributions in the last year
        </p>
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
        <a
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm"
          href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
        >
          How are contributions counted?
          <ExternalLinkIcon className="w-3.5 h-3.5" />
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-4">
        {contributions.map((contribution) => (
          <div key={contribution.label}>
            <p className="text-sm text-muted-foreground">
              {contribution.label}
            </p>
            <div className="text-4xl font-semibold">{contribution.count}</div>
            <div className="text-muted-foreground">
              {contribution.percentage}%
            </div>
          </div>
        ))}
      </div>
    </TooltipProvider>
  );
};
