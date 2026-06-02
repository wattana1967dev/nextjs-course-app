import Image from "next/image";
import type { CourseResponse } from "@/types/course";

async function getCourses() {
  const res = await fetch("https://api.codingthailand.com/api/course", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Cannot fetch course data");
  }

  const result: CourseResponse = await res.json();

  return result.data.filter((course) => course.id && course.title);
}

export default async function CoursePage() {
  const courses = await getCourses();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-2 text-3xl font-bold">Course List</h1>

      <p className="mb-8 text-gray-600">
        แสดงข้อมูลคอร์สเรียนจาก Backend API
      </p>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.id}
            className="overflow-hidden rounded-xl border bg-white shadow-sm"
          >
            <Image
              src={course.picture}
              alt={course.title}
              width={600}
              height={400}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold">{course.title}</h2>

              <p className="mt-2 text-sm text-gray-600">
                {course.detail}
              </p>

              <div className="mt-4 text-sm text-gray-500">
                <p>วันที่: {course.date}</p>
                <p>จำนวนผู้เข้าชม: {course.view.toLocaleString()} views</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}