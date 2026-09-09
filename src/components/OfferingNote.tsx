import React from 'react'
import OfferingData from '../../courses/offering/courses.json'

function formatTerms(course) {
    // e.g. "Fall and Summer"
    const terms = []
    if (course.fall) terms.push('Fall')
    if (course.winter) terms.push('Winter')
    if (course.summer) terms.push('Summer')

    if (terms.length === 1) return terms[0]
    if (terms.length === 2) return `${terms[0]} and ${terms[1]}`
    if (terms.length === 3) return `${terms[0]}, ${terms[1]}, and ${terms[2]}`
}

export default function OfferingNote({courseCode}) {
    const course = OfferingData.courses.find(
        (c) => c['course code'] === courseCode,
    )
    const fmt = course && formatTerms(course)

    return (
        <p>
            For {OfferingData.years}, {courseCode} is{' '}
            {fmt ? `being offered in ${fmt}` : 'not being offered'}. See the{' '}
            <a href="/wiki/courses/">course offering table</a> for more
            details.
        </p>
    )
}
