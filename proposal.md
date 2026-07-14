---
title: School Transport Safety System Proposal
brand: Safeschoolbus
# logo: assets/logo.png   # uncomment once you add your logo file
subtitle: A mobile and web-based system for parent notifications, school transport accountability, and child safety
preparedBy: Hillary Nyakundi
projectType: Mobile and web-based school transport safety and notification system
techStack: Expo React Native, Node.js, Express, and a web admin console
version: "1.0"
date: July 2026
output: Safeschoolbus_Proposal
---

## Table of Contents

1. Executive Summary
2. Draft Budget Estimate
3. Draft Timeline Estimate
4. Problem Statement
5. Project Objectives
6. Proposed Solution
7. System Users and Roles
8. Functional Scope
9. System Architecture
10. Data Model Overview
11. Security and Compliance
12. Development Approach
13. Testing and Pilot Strategy
14. Expected Outcomes
15. Conclusion

## 1. Executive Summary

Safeschoolbus is a school transport safety system designed to help parents receive timely notifications when their children are picked from home, arrive at school, are picked from school, and arrive back home. The platform will use a mobile app for parents and bus attendants, a web dashboard for school administrators, and a super admin console for platform management. The objective is to improve child safety, parent confidence, and school transport accountability through structured, event-based communication.

## 2. Draft Budget Estimate

The initial budget for Safeschoolbus is estimated at **KES 1.2 million to KES 2.8 million** for a pilot MVP without GPS hardware, and **KES 1.4 million to KES 3.5 million** if GPS tracking hardware is included. The final budget will depend on the number of schools, buses, users, notification volume, and whether the first version includes only event-based notifications or also includes GPS tracking.

### 2.1 Product development

| Item | Estimate |
| --- | ---: |
| Discovery and planning | KES 80,000 – 150,000 |
| UI/UX design | KES 120,000 – 250,000 |
| Expo React Native mobile app | KES 350,000 – 800,000 |
| Node.js/Express backend API | KES 300,000 – 700,000 |
| School admin web dashboard | KES 250,000 – 600,000 |
| Super admin console | KES 180,000 – 450,000 |
| QA testing and bug fixing | KES 120,000 – 250,000 |

### 2.2 Infrastructure and operations

- Hosting, database, backups, and monitoring: **KES 15,000 – 50,000 per month**
- SMS notifications: **varies by volume**, typically budget **KES 10,000 – 40,000 per month** for a pilot stage
- Push notification service: usually low cost initially
- Domain, SSL, and basic email services: **KES 10,000 – 30,000 per year**

### 2.3 Optional hardware for later phase

- GPS device per bus: **KES 8,000 – 15,000**
- Installation per bus: **KES 2,000 – 5,000**
- Optional attendant device or tablet: **KES 15,000 – 35,000 each**

### 2.4 Pilot budget

- **Without GPS hardware:** roughly **KES 1.2M – 2.8M**
- **With GPS hardware:** roughly **KES 1.4M – 3.5M**

These figures are directional and should be refined after scope confirmation, vendor selection, and pilot size definition.

<div class="page-break"></div>

## 3. Draft Timeline Estimate

The initial MVP for Safeschoolbus is expected to take approximately **10 to 16 weeks**, depending on scope, team size, and whether the first version includes only event-based notifications or also includes GPS tracking. A phased approach will be used, beginning with planning and design, followed by backend development, mobile app implementation, dashboard development, QA testing, and a pilot rollout.

| Phase | Focus | Duration |
| --- | --- | --- |
| 1. Discovery and planning | Requirements, roles, workflow, MVP scope | 1–2 weeks |
| 2. UX/UI design | Parent app, attendant, admin, super admin screens | 1–2 weeks |
| 3. Backend setup | API, database, auth, core endpoints | 2–3 weeks |
| 4. Mobile app development | Expo React Native app for parents and attendants | 3–5 weeks |
| 5. School admin dashboard | School management web interface | 2–4 weeks |
| 6. Super admin console | Platform-level control console | 1–2 weeks |
| 7. QA and pilot testing | Notifications, flows, single-school pilot | 1–2 weeks |
| 8. Launch and iteration | Fixes, polish, first production release | 1–2 weeks |

### 3.1 Phase 1: Discovery and planning

Define requirements, user roles, transport workflow, notification events, and MVP scope. This phase should also confirm whether the first release is event-based only or includes GPS from day one.

### 3.2 Phase 2: UX/UI design

Design the parent app, attendant screens, school admin dashboard, and super admin console. This includes user flows, wireframes, and navigation structure for each role.

### 3.3 Phase 3: Backend setup

Build the Node/Express API, database schema, authentication, role permissions, and core transport endpoints. This is where the school, bus, child, parent, route, trip, and notification models are established.

### 3.4 Phase 4: Mobile app development

Develop the Expo React Native app for parents and attendants, including login, role-based screens, trip event actions, and notification views. Expo is a good fit for an MVP because it speeds up build and launch cycles.

### 3.5 Phase 5: School admin dashboard

Build the school management web interface for onboarding schools, adding buses, assigning routes, linking children to parents, and reviewing transport records. This dashboard will be central to day-to-day school operations.

### 3.6 Phase 6: Super admin console

Create the platform-level console for managing schools, subscriptions, permissions, support, and audit logs. This layer is important for multi-school scaling and operational oversight.

### 3.7 Phase 7: QA and pilot testing

Test notifications, login flows, role restrictions, and trip event accuracy. Then run a pilot with one school and a few buses to identify workflow gaps before public release.

### 3.8 Phase 8: Launch and iteration

Fix pilot issues, polish the UI, and prepare the first production release. After launch, collect user feedback and plan the next phase of enhancements such as GPS tracking and route optimization.

<div class="page-break"></div>

## 4. Problem Statement

Parents often worry about whether their child boarded the school bus, arrived at school safely, and returned home without incident. For schools operating multiple buses and routes, manual communication is slow, inconsistent, and difficult to track. There is also a growing need to handle children's data carefully and transparently under Kenya's data protection framework.

## 5. Project Objectives

- Notify parents at each major transport milestone.
- Give bus attendants a simple tool to confirm transport events.
- Help school administrators manage buses, routes, children, and staff.
- Provide platform-level visibility through a super admin console.
- Improve trust, accountability, and operational clarity.
- Keep the system compliant with data protection expectations for children's data.

## 6. Proposed Solution

Safeschoolbus will use event-based transport updates. The bus attendant will confirm when a child is picked up, arrives at school, is picked for return, and arrives home, and the system will automatically send notifications to the parent. This approach is practical because it solves the core safety concern first, while allowing live GPS tracking and richer analytics to be added later.

## 7. System Users and Roles

The system will support four main user groups:

- Parent or guardian: receives transport alerts and checks child status.
- Bus attendant: records pickup and drop-off events.
- School admin: manages school transport operations.
- Super admin: manages the entire platform and multiple schools.

This role separation is important because it ensures each user only sees the information relevant to them, which supports better usability and privacy control.

## 8. Functional Scope

The first version of Safeschoolbus should include:

- User registration and login.
- Role-based access control.
- School onboarding.
- Bus registration.
- Driver and attendant registration.
- Route creation and assignment.
- Child and parent linking.
- Trip event logging.
- Parent SMS and push notifications.
- Trip history.
- Audit logs.
- School admin dashboard.
- Super admin console.

Existing Kenya-focused school transport platforms already emphasize notifications, route management, and parent visibility, showing that these are the right core features for an MVP.

## 9. System Architecture

Safeschoolbus will be structured into three main layers:

- Mobile app: built with Expo React Native for parents and attendants.
- School admin dashboard: built with React or Next.js for school-level operations.
- Super admin console: built with React or Next.js for platform-level control.
- Backend API: built with Node.js and Express.
- Database: stores schools, users, buses, routes, trips, notifications, and audit logs.

This architecture keeps the mobile experience simple while giving administrators a more powerful interface for managing data and operations.

<div class="page-break"></div>

## 10. Data Model Overview

The core entities should include:

- School.
- Parent.
- Child.
- Bus.
- Driver.
- Attendant.
- Route.
- Stop or pickup point.
- Trip.
- Trip event.
- Notification.
- User role.
- Audit log.

Each child should be linked to one or more parents or guardians, and each bus should belong to a school. Each route should belong to a bus or transport plan, and each trip should produce event records that trigger notifications.

## 11. Security and Compliance

Because the platform handles children's data, security and privacy must be part of the design from the beginning. Safeschoolbus should follow privacy-by-design principles, use strong role-based permissions, log sensitive actions, and minimize the amount of personal data stored. The school should also have a clear consent and legal basis for collecting and processing transport-related information for parents and children.

## 12. Development Approach

The project should be delivered in stages:

1. Discovery and planning.
2. UI/UX design.
3. Backend API development.
4. Mobile app development.
5. School admin dashboard development.
6. Super admin console development.
7. Testing and pilot rollout.
8. Iteration and scale-up.

A staged approach is best because it allows the transport workflow to be tested early before advanced features like live GPS and route optimization are added.

## 13. Testing and Pilot Strategy

The first pilot should be done with one school, a small number of buses, and a limited number of routes. The pilot should test whether notifications are delivered on time, whether attendants can easily log events, and whether parents understand the updates. This will help refine the workflow and reduce technical and operational risks before full launch.

## 14. Expected Outcomes

- Reduce parent anxiety.
- Improve child transport accountability.
- Simplify school communication.
- Create a clear transport record.
- Support safer and more transparent school commuting.

In the long run, the platform can expand into live tracking, analytics, subscription management, and multi-school operations.

## 15. Conclusion

Safeschoolbus is a practical and scalable solution for school transport safety in Kenya. By starting with simple event-based notifications and role-based access, the system can deliver immediate value while laying a strong foundation for future features such as GPS tracking and advanced reporting.
