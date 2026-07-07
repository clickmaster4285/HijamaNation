import CourseCurriculum from "@/content/Hijama-course/course-curriculum";
import CertificationDetails from "@/content/Hijama-course/certification-details";
import PracticalTraining from "@/content/Hijama-course/practical-training";
import CourseFeesContent from "@/content/Hijama-course/course-fees";
import CourseDurationContent from "@/content/Hijama-course/course-duration";
const pageComponents = {
  "course-curriculum": CourseCurriculum,
  "certification-details": CertificationDetails,
  "practical-training": PracticalTraining,
  "course-fees": CourseFeesContent,
  "course-duration": CourseDurationContent,
};

export async function generateStaticParams() {
  return Object.keys(pageComponents).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const metadataMap = {
    "course-curriculum": {
      title: "Hijama Course Curriculum | Hijama Nation",
      description: "Explore our comprehensive hijama course curriculum — from foundations and anatomy to hands-on training and certification.",
    },
    "certification-details": {
      title: "Certification Details & Requirements | Hijama Nation",
      description: "Learn about our Hijama certification pathway, requirements, assessment methods, renewal process, and what you'll receive upon certification.",
    },
    "practical-training": {
      title: "Practical Training & Assessment | Hijama Nation",
      description: "Discover how practical training is structured at Hijama Nation — from supervised sessions to final assessment.",
    },
    "course-fees": {
      title: "Course Fees & What's Included | Hijama Nation",
      description: "Explore our transparent course fee structure, payment options, and what's included in your Hijama certification training.",
    },
  };
  return metadataMap[slug] || {
    title: "Hijama Course | Hijama Nation",
    description: "Learn about our hijama course offerings.",
  };
}

export default async function CourseSlugPage({ params }) {
  const { slug } = await params;
  const PageComponent = pageComponents[slug];

  if (!PageComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-serif text-gray-900">Page Not Found</h1>
      </div>
    );
  }

  return <PageComponent />;
}