---
featured: true
title: "SozPad - Sozialpädagogik 2.0"
description: "Sozialpädagogische Datenerfassung und Verwaltung"
date: 2024-01-20
technologies: ["SvelteKit", "TailwindCSS", "Supabase", "Expo", "React Native"]
status: "in Planung"
github: "https://github.com"
---

Als Zivildienstleistender in einer Primarschule bekommt man viele Arbeitsabläufe von verschiedenen Lehrpersonen und Fachkräften mit. In vielen Bereichen besteht grosses Potential Prozesse zu optimieren und vor allem zu digitalisieren.

# Die Idee

SozPad ist primär eine Webapplikation, die das Erfassen von Daten von abweichenden sozialen Interaktionen der Schüler vereinfachen soll. Unterstützt wird diese mit einer mobilen App für iOS und Android, sodass alle Beteiligten Fachpersonen einfach und effizient eine besondere Situation erfassen können. Dies ermöglicht eine dichtere Dokumentation der sozialen Brandherde in Schulklassen.

# Das Problem

Sozialpädagogen haben aktuell keine Möglichkeit ihre Beobachtungen effizient und organisiert digital zu erfassen. Viele schreiben ihre Beobachtungen und Notizen auf Papier, die später von Hand digitalisiert werden. Dies ist notwendig, sodass wichtigen Informationen im Team geteilt werden können. Dabei können viele unscheinbare Details wie der Ort, die Zeit oder allfällige Mit-Akteure vergessen werden.

# Lösungsansätze

1. Alle Daten werden in einer zentralisierten Datenbank gespeichert. Somit haben alle im Team Zugriff auf die essentiellen Informationen der Sozialpädagogen. Dies ermöglicht auch die Datenerfassung von Lehrpersonen und Zivildienstleistenden, die im heutigen System nicht bei der Dokumentation mit einbezogen sind.
2. Die Daten werden per Formular erhoben, somit werden Details die heutzutage vergessen gehen.
3. Das Smartphone befindet sich jederzeit griffbereit und muss nicht speziell mit sich herumgetragen werden.

## Tech-Stack

- Webapplikation: NextJS, Tailwind
- Mobile App: React Native (Expo), Nativewind
- Backend: Supabase (Auth & Database)
