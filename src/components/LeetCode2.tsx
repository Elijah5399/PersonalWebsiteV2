export default function LeetCode2(): JSX.Element {
  const result = fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
                    query getUserContestRanking($username: String!) {
                      userContestRanking(username: $username) {
                        attendedContestsCount
                        rating
                        globalRanking
                        totalParticipants
                        topPercentage
                      }
                    }
                  `,
      variables: {
        username: "ElijahChia",
      },
    }),
  }).then((res) => res.json());
  return (
    <>
      <h1>{result}</h1>
    </>
  );
}
