'use client';

import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';

interface Tournament {
  id: string;
  name: string;
  date: string;
  winner: string;
  summary: string;
}

export default function TournamentsPage() {
  const tournaments: Tournament[] = [
    {
      id: '1',
      name: 'Grandmaster Showdown',
      date: '2024-03-15',
      winner: 'Magnus Carlsen',
      summary: 'A thrilling match with a surprising finish.'
    },
    {
      id: '2',
      name: 'Rapid Chess Championship',
      date: '2024-02-20',
      winner: 'Hikaru Nakamura',
      summary: 'Fast-paced games with strategic depth.'
    },
    {
      id: '3',
      name: 'Blitz Battle Royale',
      date: '2024-01-10',
      winner: 'Alireza Firouzja',
      summary: 'Intense blitz games with quick decisions.'
    },
    {
      id: '4',
      name: 'Classical Chess Masters',
      date: '2023-12-05',
      winner: 'Fabiano Caruana',
      summary: 'A classic tournament with long, thoughtful games.'
    },
    {
      id: '5',
      name: 'Amateur Open',
      date: '2023-11-18',
      winner: 'Ethan Harper',
      summary: 'An open tournament showcasing emerging talent.'
    }
  ];

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header variant="sticky" />
      
      <main className="flex-1 px-4 py-8 sm:px-6 md:px-10 lg:px-20">
        <Container size="xl">
          {/* Page Header */}
          <h2 className="text-3xl font-bold text-black dark:text-white">Past Tournaments</h2>
          <p className="mt-2 text-black/60 dark:text-white/60">
            Browse through the results of recently concluded tournaments.
          </p>

          {/* Tournament Table */}
          <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-white/5 dark:bg-black/20">
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="bg-white/5 dark:bg-black/20">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-black dark:text-white">
                      Tournament Name
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-black dark:text-white">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-black dark:text-white">
                      Winner
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-black dark:text-white">
                      Summary
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {tournaments.map((tournament) => (
                    <tr 
                      key={tournament.id}
                      className="cursor-pointer transition-colors hover:bg-white/10 dark:hover:bg-black/30"
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-black dark:text-white">
                        {tournament.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-black/60 dark:text-white/60">
                        {tournament.date}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-black/60 dark:text-white/60">
                        {tournament.winner}
                      </td>
                      <td className="max-w-xs truncate px-6 py-4 text-sm text-black/60 dark:text-white/60">
                        {tournament.summary}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
