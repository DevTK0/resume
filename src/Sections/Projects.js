import SectionHeader from "../Components/SectionHeader";

function Projects() {
    return (
        <div>
            <SectionHeader title="Projects" />
            <div class="font-bold">
                <a href="#">00 Raiser</a>
            </div>
            <ul class="mb-4 list-disc list-inside font-extralight">
                <li>
                    A Discord bot for managing AWS instances of server based
                    games such as Minecraft, V Rising and Core Keeper.
                </li>
                <li>
                    Programmatically spins up ec2 instances for the game
                    specified.
                </li>
                <li>
                    On termination, automatically backs up the volume data into
                    a snapshot and generates a new AMI image to be used in the
                    next gaming session. (Eventbridge, Lambda, Python)
                </li>
            </ul>
            <div class="font-bold">
                <a href="https://gitlab.com/tko.developer.02/CakeChef">
                    CakeChef
                </a>
            </div>

            <ul class="mb-4 list-disc list-inside font-extralight">
                <li> An Open Source, 2-in-1, binary file reader/writer. </li>
                <li>
                    YAML based configuration with support for dynamic
                    configuration (variables, loops, conditional statements).
                </li>
                <li>
                    Support for various encoding/decoding formats (endianness,
                    date/string/integer)
                </li>
                <li> Convenience utilities (crc32 generator) </li>
                <li> Built in Javascript and NodeJS. </li>
                <li> CICD Pipeline using Gitlab CI to run Jest tests. </li>
            </ul>

            <div class="font-bold">
                <a href="https://github.com/DevTK0/core-tech">
                    Familiar Beasts (WIP)
                </a>
            </div>
            <ul class="mb-4 list-disc list-inside font-extralight">
                <li>
                    A browser based battle simulator where players form teams of
                    familiars and do battle.
                </li>
                <li>Full serverless - Vercel, PlanetScale, Ably</li>
                <li>
                    A Modern Stack - NextJS, NextAuth, React, TailwindCSS,
                    Prisma, AJV
                </li>
                <li>Built in Typescript with end-to-end type safety.</li>
            </ul>
        </div>
    );
}

export default Projects;
