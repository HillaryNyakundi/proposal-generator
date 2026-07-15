---
title: HR Recruitment System Proposal
subtitle: An applicant-tracking minimum viable product(MVP) for centralized job posting, applications, and candidate review
preparedBy: Hillary Nyakundi
client: Brooks Lutta and associate
date: July 15, 2026
output: HR_Recruitment_System_Proposal
logo: assets/logo.png 
---

## About AVID TECH

AVID TECH builds modern web and mobile applications that help businesses, organizations and institutions digitize their operations, streamline workflows, and deliver reliable digital experiences. We focus on practical, maintainable software delivered on clear timelines with transparent pricing.

## 1. Executive Summary

This proposal outlines the design and development of an HR recruitment system MVP that allows an administrator to post jobs, receive applications, and manage candidates from a central dashboard. Candidates will be able to create accounts, update their personal and work details, upload CVs, and apply for jobs through the platform. The solution is designed as a focused recruitment product that supports the core applicant-tracking workflow while leaving room for future HR features.

## 2. Project Objectives

The main objectives of the system are to:

- Allow administrators to create and manage job openings.
- Allow candidates to register, complete their profiles, and upload CVs.
- Allow candidates to apply for posted jobs through the platform.
- Allow administrators to review applications in one place.
- Provide a simple foundation for future HR modules.

Applicant tracking systems are used to manage the recruiting process from job posting through candidate review, which makes this workflow a strong fit for the MVP.

## 3. Proposed Solution

The platform will have two main user experiences:

- Candidate portal for registration, profile completion, CV upload, job browsing, and job applications.
- Admin dashboard for posting jobs, reviewing applicants, updating application status, and tracking recruitment progress.

The MVP will focus on the recruitment pipeline only. It will not include payroll, leave management, performance management, or other full HR suite features in the first release.

## 4. Scope of Work

### Included in MVP

- User registration and login.
- Role-based access for admin and candidates.
- Candidate profile creation and editing.
- CV upload and file storage.
- Job posting and editing by admin.
- Job listing and job detail pages.
- Job application submission.
- Admin inbox for applications.
- Applicant filtering and search.
- Application status updates.
- Email notifications for important actions.
- Basic dashboard metrics.

### Excluded from MVP

- Payroll.
- Leave management.
- Performance management.
- Interview scheduling automation.
- AI resume screening.
- Mobile application.
- Multi-company SaaS support.
- Advanced analytics.

## 5. Key Deliverables

The project will deliver:

- A responsive web application.
- A secure admin panel.
- Candidate registration and profile workflow.
- CV upload and storage functionality.
- Job posting and management module.
- Application tracking module.
- Notification system.
- Production deployment.
- Source code handover.
- Short post-launch support period.

## 6. Technology Stack

The recommended stack for this project is:

- Frontend: Next.js and TypeScript.
- Backend: Node.js API.
- Database: PostgreSQL.
- File storage: Cloud storage for CV files.
- Authentication: Secure login with role-based permissions.
- Hosting: Vercel for the frontend and a managed backend/database setup.

This stack is well suited for a maintainable MVP and supports future growth without a full rebuild.

<div class="page-break"></div>

## 7. Development Timeline

The estimated timeline for delivery is 6 to 10 weeks, depending on final scope and feedback turnaround.

### Week 1

- Requirements gathering.
- Workflow mapping.
- Wireframes and project plan.

### Week 2

- UI design.
- Database design.
- Authentication setup.

### Weeks 3–4

- Candidate portal development.
- Profile creation and CV upload.

### Weeks 5–6

- Admin dashboard development.
- Job posting and applicant review modules.

### Weeks 7–8

- Application tracking.
- Email notifications.
- Testing and bug fixing.

### Weeks 9–10

- Deployment.
- Final adjustments.
- Handover and support.

## 8. Budget and Pricing

For the proposed MVP scope, the recommended project fee is **$1,000**.

### Estimated Infrastructure & Hosting Costs

The figures below are the recurring third-party service costs required to run the system in production. They are billed directly to the client and are **not included** in the project development fee. Actual amounts vary by provider and by usage (traffic, storage volume, and number of users).

| Item | Purpose | Estimated Cost (USD) | Billing |
| --- | --- | ---: | --- |
| VPS / Server | Hosts the Node.js backend API and PostgreSQL database | $12 – $30 | Monthly |
| Domain name | Public web address (e.g. `.com` or `.co.ke`) | $12 – $20 | Annually |
| Cloud storage | Stores candidate CV uploads and related files | $5 – $15 | Monthly |
| SSL certificate | Secure HTTPS connection | Free (Let's Encrypt / Vercel) | — |

**Estimated recurring total:** approximately **$17 – $45 per month**, plus **$12 – $20 per year** for the domain. These are directional estimates and should be confirmed against the chosen providers before deployment.

## 9. Payment Schedule

| Milestone | Deliverable | Payment % | Amount (USD) |
| --- | --- | ---: | ---: |
| 1. Project kickoff | Signed agreement, requirements confirmed, wireframes outline approved | 30% | $300 |
| 2. Core build | Candidate registration, profiles, CV upload, and job posting modules completed on staging | 30% | $300 |
| 3. Admin workflow | Applications inbox, review tools, status updates, and notifications completed | 20% | $200 |
| 4. Final delivery | Testing, bug fixes, deployment, handover, and source code transfer | 20% | $200 |

**Total project fee: $1,000**

## 10. Payment Terms

- The first payment is due before development begins.
- Each subsequent payment is due after the relevant milestone is demonstrated and approved.
- The final payment is due after deployment and handover.
- Any scope changes after approval will be quoted separately.
- Hosting, SMS, and third-party service costs are not included in the development fee unless agreed in writing.

<div class="page-break"></div>

## 11. Post-Launch Maintenance Terms

After deployment and handover, the developer will provide **14 days of complimentary post-launch support** to address critical bugs, minor fixes, and issues directly related to the delivered MVP. This support period covers defects in the original build but does not include new features, scope changes, or third-party service costs.

Following the complimentary support window, the client may choose one of the following maintenance options:

| Plan | Coverage | Monthly Fee (USD) |
| --- | --- | ---: |
| Basic Support | Up to 4 hours of fixes and minor updates per month, email support, bug fixes only | $120 |
| Standard Support | Up to 8 hours per month, bug fixes, small UI changes, system checks, and email support | $240 |
| Premium Support | Up to 15 hours per month, priority support, bug fixes, small improvements, monitoring, and monthly review call | $400 |

### Maintenance Terms

- Maintenance begins after the complimentary support period ends.
- Support requests will be handled based on severity and availability.
- Critical bugs affecting system operation will be prioritized first.
- New features, redesigns, and major enhancements will be quoted separately.
- Unused monthly support hours do not roll over unless agreed in writing.
- Hosting, domain renewal, SMS, email, and third-party API costs are billed separately unless included in the maintenance plan.

## 12. Assumptions

This proposal assumes:

- The system will initially serve one organization.
- The client will provide branding assets, job categories, and policy content on time.
- CV files will be uploaded in common formats such as PDF or DOCX.
- Feedback and approvals will be given within a reasonable timeframe to avoid delays.

## 13. Future Enhancements

After the MVP is launched and tested, the platform can be expanded to include:

- Interview scheduling.
- SMS notifications.
- Advanced candidate scoring.
- Recruitment analytics.
- Department-level access control.
- Full HR management modules.
- Mobile app support.

## 14. Conclusion

This MVP will provide the client with a practical recruitment system that centralizes job posting, applications, and candidate review. It is intentionally scoped to be fast to build, easy to use, and ready for future expansion. The payment structure and maintenance terms give both parties clarity and keep the project manageable from start to finish.

**Project fee: $1,000**

**Estimated delivery: 6 to 10 weeks**

<div class="page-break"></div>

## Signature Page

By signing below, both parties confirm acceptance of this proposal and agree to the scope, pricing, timeline, payment schedule, and maintenance terms outlined above.

| Name | Title | Signature | Date |
| --- | --- | --- | --- |
| **Hillary Nyakundi** | Independent contractor / consultant | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
| **Client Name** | Authorized Representative | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |

### Acceptance Statement

We, the undersigned, hereby agree to the terms and conditions stated in this proposal and authorize the commencement of work upon receipt of the agreed initial payment.

<div class="page-break"></div>

<div style="text-align:center;">

## Thank you for choosing AVID TECH.

*Building practical software that moves your business forward.*

</div>
