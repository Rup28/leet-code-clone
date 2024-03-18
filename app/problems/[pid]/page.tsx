"use client"
import Workspace from '@/components/Workspace/Workspace';
import React, { useState, useEffect } from 'react';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';
import { useRouter } from 'next/navigation';

type ProblemPageProps = { problem: Problem };

const ProblemPage: React.FC<ProblemPageProps> = ({ problem }) => (
  <div>
    <Workspace problem={problem} />
  </div>
);

export default function MyProblemPage() {
  const [problem, setProblem] = useState<Problem | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { pid } = router.query
    console.log(pid);

    const fetchData = async () => {
      if (pid) {
        const problemData = problems[pid as string];
        if (problemData) {
          setProblem(problemData);
        }
      }
    };

    fetchData();
  }, [router.query]); // Watch for changes in router.query

  if (!problem) {
    return <div>Loading problem...</div>;
  }

  return <ProblemPage problem={problem} />;
}