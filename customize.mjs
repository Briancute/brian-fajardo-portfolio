import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, 'public');
const PROJECTS_DIR = path.join(PUBLIC_DIR, 'projects');

const MEDIA_DIR = process.env.USER_MEDIA_DIR || '';
const IMAGE_COPIES = MEDIA_DIR
  ? [
      { src: path.join(MEDIA_DIR, 'media_1795656556958_6e00f2bb.jpg'), dest: 'openstate.jpg' },
      { src: path.join(MEDIA_DIR, 'media_1795656661360_f63e1cd2.jpg'), dest: 'cloudtalk.jpg' },
      { src: path.join(MEDIA_DIR, 'media_1795656543385_e3159645.png'), dest: 'brainpaintepic.png' },
      { src: path.join(MEDIA_DIR, 'media_1795656499900_8828c24c.jpg'), dest: 'efferd.jpg' },
      { src: path.join(MEDIA_DIR, 'media_1795656515914_cdc8eadd.jpg'), dest: 'nura.jpg' },
    ]
  : [];

const NEW_WORKS_LIST = `<ul class="works__list">
              <li data-work data-category="web" data-case="openstate">
                <a href="/work/openstate">
                  <img src="/projects/openstate.jpg" alt="Openstate" width="1200" height="675" />
                  <span data-title>Openstate</span> — <span data-subtitle>Interactive sound experience</span>
                </a>
              </li>
              <li data-work data-category="web" data-case="brainpaintepic">
                <a href="/work/brainpaintepic">
                  <img src="/projects/brainpaintepic.png" alt="BF Studio Archive" width="1200" height="675" />
                  <span data-title>BF Studio Archive</span> — <span data-subtitle>Creative technology &amp; web development</span>
                </a>
              </li>
              <li data-work data-category="web" data-case="cloudtalk">
                <a href="/work/cloudtalk">
                  <img src="/projects/cloudtalk.jpg" alt="CloudTalk" width="1200" height="675" />
                  <span data-title>CloudTalk</span> — <span data-subtitle>Functional design system</span>
                </a>
              </li>
              <li data-work data-category="web" data-case="efferd">
                <a href="/work/efferd">
                  <img src="/projects/efferd.jpg" alt="Efferd" width="1200" height="675" />
                  <span data-title>Efferd</span> — <span data-subtitle>Digital growth platform</span>
                </a>
              </li>
              <li data-work data-category="motion" data-case="nura">
                <a href="/work/nura">
                  <img src="/projects/nura.jpg" alt="Nura Health" width="1200" height="675" />
                  <span data-title>Nura Health</span> — <span data-subtitle>Precision longevity</span>
                </a>
              </li>
              <li data-work data-category="web" data-case="quinpdf">
                <a href="/work/quinpdf">
                  <img src="/projects/quinpdf.jpg" alt="QuinPDF" width="1200" height="675" />
                  <span data-title>QuinPDF</span> — <span data-subtitle>Browser-native PDF toolkit</span>
                </a>
              </li>
            </ul>`;

const NEW_CASE_PANEL = `<section class="case" id="case" aria-label="Case">
        <div class="case__panel">
        <article class="case__entry" data-case="openstate" data-title="Openstate, Interactive sound experience — Brian Fajardo" hidden>
          <div class="case__text">
            <h2 class="case__title film-title"><span data-goo>Openstate</span></h2>
            <p class="case__headline" data-case-fade><span class="case__dim">Somewhere between silence</span> and sound, a new state begins.</p>
            <div class="case__outro">
              <p class="case__about" data-case-fade>An atmospheric web experience for Openstate combining spatial audio frequencies, nocturnal desert landscapes, and interactive 3D visuals into a minimal editorial interface.</p>
              <dl class="case__facts" data-case-fade>
                <div><dt>Year</dt><dd>2026</dd></div>
                <div><dt>Client</dt><dd>Openstate</dd></div>
                <div><dt>Work</dt><dd>Interactive website</dd></div>
                <div><dt>Role</dt><dd>UI/UX design, WebGL, front-end development</dd></div>
                <div><dt>Studio</dt><dd>Brian Fajardo</dd></div>
                <div><dt>Site</dt><dd><a href="https://brainepicwebsite.netlify.app/" target="_blank" rel="noopener noreferrer">brainepicwebsite.netlify.app<span aria-hidden="true"> ↗</span></a></dd></div>
              </dl>
            </div>
          </div>
          <ul class="case__media" aria-label="Pictures of Openstate">
            <li data-span="full" data-aspect="1.778" data-full="/projects/openstate.jpg"><img src="/projects/openstate.jpg" alt="Openstate hero experience" loading="lazy" decoding="async" /></li>
            <li data-span="full" data-aspect="1.778" data-full="/projects/openstate-frame.webp"><img src="/projects/openstate-frame.webp" alt="Openstate The Artist section" loading="lazy" decoding="async" /></li>
            <li data-span="half" data-aspect="0.8" data-full="/projects/openstate-detail-1.webp"><img src="/projects/openstate-detail-1.webp" alt="Openstate neuro-acoustic performance view" loading="lazy" decoding="async" /></li>
            <li data-span="half" data-aspect="0.8" data-full="/projects/openstate-detail-2.webp"><img src="/projects/openstate-detail-2.webp" alt="Openstate Albums showcase" loading="lazy" decoding="async" /></li>
            <li data-span="full" data-aspect="1.778" data-full="/projects/openstate-section-2.webp"><img src="/projects/openstate-section-2.webp" alt="Openstate Science research index" loading="lazy" decoding="async" /></li>
          </ul>
        </article>
        <article class="case__entry" data-case="cloudtalk" data-title="CloudTalk, Functional design system — Brian Fajardo" hidden>
          <div class="case__text">
            <h2 class="case__title film-title"><span data-goo>CloudTalk</span></h2>
            <p class="case__headline" data-case-fade><span class="case__dim">Functional design system</span> for modern cloud communication.</p>
            <div class="case__outro">
              <p class="case__about" data-case-fade>Redesigning a VoIP communication platform’s mobile and desktop experience with a unified component library, real-time call analytics, and crystal-clear call controls.</p>
              <dl class="case__facts" data-case-fade>
                <div><dt>Year</dt><dd>2025</dd></div>
                <div><dt>Client</dt><dd>CloudTalk</dd></div>
                <div><dt>Work</dt><dd>Design system &amp; web app</dd></div>
                <div><dt>Role</dt><dd>Product design, UI kit, interactive prototype</dd></div>
                <div><dt>Studio</dt><dd>Brian Fajardo</dd></div>
                <div><dt>Site</dt><dd><a href="https://spiffy-jelly-4766bc.netlify.app/" target="_blank" rel="noopener noreferrer">spiffy-jelly-4766bc.netlify.app<span aria-hidden="true"> ↗</span></a></dd></div>
              </dl>
            </div>
          </div>
          <ul class="case__media" aria-label="Pictures of CloudTalk">
            <li data-span="full" data-aspect="1.778" data-full="/projects/cloudtalk.jpg"><img src="/projects/cloudtalk.jpg" alt="CloudTalk design system overview" loading="lazy" decoding="async" /></li>
            <li data-span="full" data-aspect="1.778" data-full="/projects/cloudtalk-frame.webp"><img src="/projects/cloudtalk-frame.webp" alt="CloudTalk seamless calling interface" loading="lazy" decoding="async" /></li>
            <li data-span="half" data-aspect="0.8" data-full="/projects/cloudtalk-detail-1.webp"><img src="/projects/cloudtalk-detail-1.webp" alt="CloudTalk portrait calling workflow" loading="lazy" decoding="async" /></li>
            <li data-span="half" data-aspect="0.8" data-full="/projects/cloudtalk-detail-2.webp"><img src="/projects/cloudtalk-detail-2.webp" alt="CloudTalk real-time team management mobile UI" loading="lazy" decoding="async" /></li>
            <li data-span="full" data-aspect="1.778" data-full="/projects/cloudtalk-section-2.webp"><img src="/projects/cloudtalk-section-2.webp" alt="CloudTalk component & analytics view" loading="lazy" decoding="async" /></li>
          </ul>
        </article>
        <article class="case__entry" data-case="brainpaintepic" data-title="BF Studio Archive, Creative technology &amp; web development — Brian Fajardo" hidden>
          <div class="case__text">
            <h2 class="case__title film-title"><span data-goo>BF Studio Archive</span></h2>
            <p class="case__headline" data-case-fade><span class="case__dim">Creating experiences through code</span> and creative technology.</p>
            <div class="case__outro">
              <p class="case__about" data-case-fade>Personal creative-developer flagship exploring what a website can feel like—combining oversized monochrome Swiss typography, a curved WebGL gallery strip, 14 studio collaborations, and a bold neon-green BF identity.</p>
              <dl class="case__facts" data-case-fade>
                <div><dt>Year</dt><dd>2026</dd></div>
                <div><dt>Client</dt><dd>Selected Studios (14 Projects)</dd></div>
                <div><dt>Work</dt><dd>Interactive flagship &amp; archive</dd></div>
                <div><dt>Role</dt><dd>Creative direction, WebGL, creative development</dd></div>
                <div><dt>Studio</dt><dd>Brian Fajardo</dd></div>
                <div><dt>Site</dt><dd><a href="https://brainpaintepic.netlify.app/" target="_blank" rel="noopener noreferrer">brainpaintepic.netlify.app<span aria-hidden="true"> ↗</span></a></dd></div>
              </dl>
            </div>
          </div>
          <ul class="case__media" aria-label="Pictures of BF Studio Archive">
            <li data-span="full" data-aspect="1.778" data-full="/projects/brainpaintepic.png"><img src="/projects/brainpaintepic.png" alt="BF Studio Archive hero — Brian Fajardo web developer" loading="lazy" decoding="async" /></li>
            <li data-span="full" data-aspect="1.778" data-full="/projects/brainpaintepic-frame.webp"><img src="/projects/brainpaintepic-frame.webp" alt="BF horizontal 11-project WebGL showcase strip" loading="lazy" decoding="async" /></li>
            <li data-span="full" data-aspect="1.778" data-full="/projects/brainpaintepic-detail-1.webp"><img src="/projects/brainpaintepic-detail-1.webp" alt="Project P.03 Alexander Cooke detail view" loading="lazy" decoding="async" /></li>
            <li data-span="full" data-aspect="1.778" data-full="/projects/brainpaintepic-detail-2.webp"><img src="/projects/brainpaintepic-detail-2.webp" alt="Swiss project index P.01–P.04 with OBYS hover preview" loading="lazy" decoding="async" /></li>
            <li data-span="full" data-aspect="1.778" data-full="/projects/brainpaintepic-section-2.webp"><img src="/projects/brainpaintepic-section-2.webp" alt="Neon green BF editorial footer" loading="lazy" decoding="async" /></li>
          </ul>
        </article>
        <article class="case__entry" data-case="efferd" data-title="Efferd, Digital growth platform — Brian Fajardo" hidden>
          <div class="case__text">
            <h2 class="case__title film-title"><span data-goo>Efferd</span></h2>
            <p class="case__headline" data-case-fade><span class="case__dim">Building digital experiences</span> that drive measurable growth.</p>
            <div class="case__outro">
              <p class="case__about" data-case-fade>A dark-mode SaaS platform and agency showcase engineered to help brands scale faster through strategic execution, real-time revenue telemetry, and conversion-focused UI.</p>
              <dl class="case__facts" data-case-fade>
                <div><dt>Year</dt><dd>2025</dd></div>
                <div><dt>Client</dt><dd>Efferd Inc.</dd></div>
                <div><dt>Work</dt><dd>SaaS landing page &amp; dashboard</dd></div>
                <div><dt>Role</dt><dd>UI/UX design, dashboard architecture, development</dd></div>
                <div><dt>Studio</dt><dd>Brian Fajardo</dd></div>
                <div><dt>Site</dt><dd><a href="https://meek-platypus-dbcf0b.netlify.app/" target="_blank" rel="noopener noreferrer">meek-platypus-dbcf0b.netlify.app<span aria-hidden="true"> ↗</span></a></dd></div>
              </dl>
            </div>
          </div>
          <ul class="case__media" aria-label="Pictures of Efferd">
            <li data-span="full" data-aspect="1.778" data-full="/projects/efferd.jpg"><img src="/projects/efferd.jpg" alt="Efferd dark mode platform" loading="lazy" decoding="async" /></li>
            <li data-span="full" data-aspect="1.778" data-full="/projects/efferd-frame.webp"><img src="/projects/efferd-frame.webp" alt="Efferd scaling teams workflow" loading="lazy" decoding="async" /></li>
            <li data-span="half" data-aspect="0.8" data-full="/projects/efferd-detail-1.webp"><img src="/projects/efferd-detail-1.webp" alt="Efferd responsive experts section" loading="lazy" decoding="async" /></li>
            <li data-span="half" data-aspect="0.8" data-full="/projects/efferd-detail-2.webp"><img src="/projects/efferd-detail-2.webp" alt="Efferd mobile scheduling and footer" loading="lazy" decoding="async" /></li>
            <li data-span="full" data-aspect="1.778" data-full="/projects/efferd-section-2.webp"><img src="/projects/efferd-section-2.webp" alt="Efferd smart scheduling showcase" loading="lazy" decoding="async" /></li>
          </ul>
        </article>
        <article class="case__entry" data-case="nura" data-title="Nura Health, Precision longevity — Brian Fajardo" hidden>
          <div class="case__text">
            <h2 class="case__title film-title"><span data-goo>Nura Health</span></h2>
            <p class="case__headline" data-case-fade><span class="case__dim">Biological intelligence</span> beyond mortality.</p>
            <div class="case__outro">
              <p class="case__about" data-case-fade>Precision longevity medicine platform engineered from vital biomarker data—combining organic cellular shaders, editorial serif accents, and a frictionless clinical trial onboarding flow.</p>
              <dl class="case__facts" data-case-fade>
                <div><dt>Year</dt><dd>2026</dd></div>
                <div><dt>Client</dt><dd>Nura Health</dd></div>
                <div><dt>Work</dt><dd>Biotech platform &amp; brand site</dd></div>
                <div><dt>Role</dt><dd>Art direction, UI/UX design, front-end build</dd></div>
                <div><dt>Studio</dt><dd>Brian Fajardo</dd></div>
                <div><dt>Site</dt><dd><a href="https://cool-zuccutto-ac44e1.netlify.app/" target="_blank" rel="noopener noreferrer">cool-zuccutto-ac44e1.netlify.app<span aria-hidden="true"> ↗</span></a></dd></div>
              </dl>
            </div>
          </div>
          <ul class="case__media" aria-label="Pictures of Nura Health">
            <li data-span="full" data-aspect="1.778" data-full="/projects/nura.jpg"><img src="/projects/nura.jpg" alt="Nura Health biotech hero" loading="lazy" decoding="async" /></li>
            <li data-span="full" data-aspect="1.778" data-full="/projects/nura-frame.webp"><img src="/projects/nura-frame.webp" alt="Nura Health The Manifesto section" loading="lazy" decoding="async" /></li>
            <li data-span="half" data-aspect="0.8" data-full="/projects/nura-detail-1.webp"><img src="/projects/nura-detail-1.webp" alt="Nura Health Intelligence cards" loading="lazy" decoding="async" /></li>
            <li data-span="half" data-aspect="0.8" data-full="/projects/nura-detail-2.webp"><img src="/projects/nura-detail-2.webp" alt="Nura Health Membership tiers" loading="lazy" decoding="async" /></li>
            <li data-span="full" data-aspect="1.778" data-full="/projects/nura-section-2.webp"><img src="/projects/nura-section-2.webp" alt="Nura Health Biological Audit protocol" loading="lazy" decoding="async" /></li>
          </ul>
        </article>
        <article class="case__entry" data-case="quinpdf" data-title="QuinPDF, Browser-native PDF toolkit — Brian Fajardo" hidden>
          <div class="case__text">
            <h2 class="case__title film-title"><span data-goo>QuinPDF</span></h2>
            <p class="case__headline" data-case-fade><span class="case__dim">Every PDF tool you’ll ever need,</span> running entirely in your browser.</p>
            <div class="case__outro">
              <p class="case__about" data-case-fade>A fast, privacy-first suite of 28 browser-native PDF tools—merge, split, compress, convert, OCR, sign, and unlock documents with zero server uploads required.</p>
              <dl class="case__facts" data-case-fade>
                <div><dt>Year</dt><dd>2026</dd></div>
                <div><dt>Client</dt><dd>QuinPDF</dd></div>
                <div><dt>Work</dt><dd>Web application &amp; SaaS toolkit</dd></div>
                <div><dt>Role</dt><dd>Product design, UI/UX, front-end architecture</dd></div>
                <div><dt>Studio</dt><dd>Brian Fajardo</dd></div>
                <div><dt>Site</dt><dd><a href="https://quinpdf.netlify.app/" target="_blank" rel="noopener noreferrer">quinpdf.netlify.app<span aria-hidden="true"> ↗</span></a></dd></div>
              </dl>
            </div>
          </div>
          <ul class="case__media" aria-label="Pictures of QuinPDF">
            <li data-span="full" data-aspect="1.778" data-full="/projects/quinpdf.jpg"><img src="/projects/quinpdf.jpg" alt="QuinPDF hero overview" loading="lazy" decoding="async" /></li>
            <li data-span="full" data-aspect="1.778" data-full="/projects/quinpdf-frame.webp"><img src="/projects/quinpdf-frame.webp" alt="QuinPDF Optimize and Convert tools dashboard" loading="lazy" decoding="async" /></li>
            <li data-span="half" data-aspect="0.8" data-full="/projects/quinpdf-detail-1.webp"><img src="/projects/quinpdf-detail-1.webp" alt="QuinPDF account authentication modal" loading="lazy" decoding="async" /></li>
            <li data-span="half" data-aspect="0.8" data-full="/projects/quinpdf-detail-2.webp"><img src="/projects/quinpdf-detail-2.webp" alt="QuinPDF Unlock PDF browser-processing modal" loading="lazy" decoding="async" /></li>
            <li data-span="full" data-aspect="1.778" data-full="/projects/quinpdf-section-2.webp"><img src="/projects/quinpdf-section-2.webp" alt="QuinPDF Organize and Manage PDFs grid" loading="lazy" decoding="async" /></li>
          </ul>
        </article>
        </div>
      </section>`;

const NEW_CONTACTS_NAV = `<nav class="contacts__links" aria-label="Contacts">
            <a class="contacts__link" href="https://www.instagram.com/jahnweak/" target="_blank" rel="noopener noreferrer">
              <span class="contacts__liquid film-title"><span data-goo>Instagram</span></span>
              <span class="contacts__crisp" aria-hidden="true">Instagram</span>
            </a>
            <a class="contacts__link" href="https://www.linkedin.com/in/brian-john-fajardo/" target="_blank" rel="noopener noreferrer">
              <span class="contacts__liquid film-title"><span data-goo>LinkedIn</span></span>
              <span class="contacts__crisp" aria-hidden="true">LinkedIn</span>
            </a>
            <a class="contacts__link" href="https://github.com/Briancute" target="_blank" rel="noopener noreferrer">
              <span class="contacts__liquid film-title"><span data-goo>GitHub</span></span>
              <span class="contacts__crisp" aria-hidden="true">GitHub</span>
            </a>
            <a class="contacts__link" href="mailto:bjfajardo01@gmail.com">
              <span class="contacts__liquid film-title"><span data-goo>Email</span></span>
              <span class="contacts__crisp" aria-hidden="true">Email</span>
            </a>
          </nav>`;

const CASE_ROUTES = [
  { slug: 'openstate', title: 'Openstate, Interactive sound experience — Brian Fajardo' },
  { slug: 'cloudtalk', title: 'CloudTalk, Functional design system — Brian Fajardo' },
  { slug: 'brainpaintepic', title: 'BF Studio Archive, Creative technology & web development — Brian Fajardo' },
  { slug: 'efferd', title: 'Efferd, Digital growth platform — Brian Fajardo' },
  { slug: 'nura', title: 'Nura Health, Precision longevity — Brian Fajardo' },
  { slug: 'quinpdf', title: 'QuinPDF, Browser-native PDF toolkit — Brian Fajardo' },
];

const HTML_FILES = [
  'index.html',
  'portfolio/index.html',
  'home.html',
  'about/index.html',
  'contacts/index.html',
];

async function main() {
  await fs.mkdir(PROJECTS_DIR, { recursive: true });
  for (const item of IMAGE_COPIES) {
    const exists = await fs.access(item.src).then(() => true, () => false);
    if (!exists) continue;
    const targetPath = path.join(PROJECTS_DIR, item.dest);
    await fs.copyFile(item.src, targetPath);
    const stat = await fs.stat(targetPath);
    console.log(`[IMG] Copied ${item.dest} (${stat.size} bytes)`);
  }

  for (const rel of HTML_FILES) {
    const filePath = path.join(PUBLIC_DIR, rel);
    let html = await fs.readFile(filePath, 'utf8');

    // 1. Remove Awwwards badge, third-party Google Analytics G-0HJYFTDW4N, and unused /ua/ hreflang
    html = html
      .replace(/<a class="awwwards"[\s\S]*?<\/a>\s*/g, '')
      .replace(/<script>window\.dataLayer=window\.dataLayer[\s\S]*?G-0HJYFTDW4N[\s\S]*?<\/script>\s*/g, '')
      .replace(/<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-0HJYFTDW4N"><\/script>\s*/g, '')
      .replace(/<link rel="alternate" hreflang="uk" href="\/ua[^"]*" \/>\s*/g, '');

    // 2. Replace preloader & header goo spans
    html = html
      .replaceAll('<span data-goo>Piven</span>', '<span data-goo>Brian</span>')
      .replaceAll('<span data-goo>Ilya</span>', '<span data-goo>Fajardo</span>');

    // 3. Replace all Piven Ilya / Ilya Piven strings & JSON-LD links
    html = html
      .replaceAll('Piven Ilya', 'Brian Fajardo')
      .replaceAll('Ilya Piven', 'Brian Fajardo')
      .replaceAll('Ілля Півень', 'Brian Fajardo')
      .replace(
        /"sameAs":\[[^\]]*\]/,
        '"sameAs":["https:\\/\\/www.instagram.com\\/jahnweak\\/","https:\\/\\/www.linkedin.com\\/in\\/brian-john-fajardo\\/","https:\\/\\/github.com\\/Briancute"]'
      )
      .replaceAll('"inLanguage":"uk"', '"inLanguage":"en"')
      .replaceAll('"knowsLanguage":["en","uk"]', '"knowsLanguage":["en"]')
      .replaceAll(
        'and a working WordPress site the client edits on their own.',
        'and interactive web experiences engineered for performance and clarity.'
      )
      .replaceAll('https://www.instagram.com/i.l_y.a', 'https://www.instagram.com/jahnweak/')
      .replaceAll('https://www.linkedin.com/in/ilya-piven', 'https://www.linkedin.com/in/brian-john-fajardo/')
      .replaceAll('piven.ilyaaa@gmail.com', 'bjfajardo01@gmail.com')
      .replaceAll('https://t.me/il_pi', 'https://www.instagram.com/jahnweak/');

    // 4. Update location, contacts nav, Netlify Forms wiring, legal copyright, and privacy copy
    html = html
      .replaceAll('<span>Kyiv, Ukraine</span>', '<span>Philippines, Cebu</span>')
      .replaceAll('<span>© 2026 Brian Fajardo</span>', '<span>© 2026 Brian Fajardo. All rights reserved.</span>')
      .replaceAll('under the Law of Ukraine &#8220;On Personal Data Protection&#8221;', 'under the Philippine Data Privacy Act')
      .replaceAll('by email and in Telegram', 'by email')
      .replace(
        /<form class="contacts__form"[^>]*>(\s*<input name="website"[^>]*\/>)/,
        `<form class="contacts__form" name="contact" method="POST" data-netlify="true" netlify-honeypot="website" data-contacts-form data-endpoint="/" novalidate>\n            <input type="hidden" name="form-name" value="contact" />\n            <input type="hidden" name="contact_kind" value="" />\n            <input type="hidden" name="contact_link" value="" />\n            <input type="hidden" name="kind" value="" />\n            <input type="hidden" name="duration" value="" />$1`
      )
      .replace(
        /<div class="privacy__text">[\s\S]*?<\/div>\s*<p class="privacy__cookies">[\s\S]*?<\/p>/,
        `<div class="privacy__text"><p>This is the portfolio of Brian Fajardo. No third-party advertising pixels or external tracking analytics are loaded on this site.</p>
<h3>What the contact form collects</h3>
<p>Only what you choose to submit: your name, reply contact (email, phone, or social profile), and your message. Submissions are processed securely over HTTPS and used solely to respond to your inquiry.</p>
<h3>How long data is kept</h3>
<p>Only for as long as we are discussing your project. Ask at any time via <a href="mailto:bjfajardo01@gmail.com">bjfajardo01@gmail.com</a> and it will be deleted immediately.</p>
<h3>Cookies</h3>
<p>No tracking cookies are set. Essential local storage is used strictly for portfolio view preference (strip or grid).</p>
<h3>Your rights</h3>
<p>You can request access to, correction of, or deletion of any message you sent by writing to <a href="mailto:bjfajardo01@gmail.com">bjfajardo01@gmail.com</a>.</p></div>`
      )
      .replace(/<div class="consent"[\s\S]*?<\/div>\s*<\/div>/, '');

    const contactsNavRegex = /<nav class="contacts__links" aria-label="Contacts">[\s\S]*?<\/nav>/;
    if (contactsNavRegex.test(html)) {
      html = html.replace(contactsNavRegex, NEW_CONTACTS_NAV);
    }

    // 5. Replace works__list with the 5 Brian Fajardo projects (internal /work/<slug> links)
    const listRegex = /<ul class="works__list">[\s\S]*?<\/ul>/;
    if (!listRegex.test(html)) {
      throw new Error(`Could not find <ul class="works__list"> in ${rel}`);
    }
    html = html.replace(listRegex, NEW_WORKS_LIST);

    // 6. Replace case panel with all 6 Brian Fajardo case studies
    const caseRegex = /<section class="case" id="case" aria-label="Case">[\s\S]*?<\/section>/;
    if (!caseRegex.test(html)) {
      throw new Error(`Could not find <section class="case"> in ${rel}`);
    }
    html = html.replace(caseRegex, NEW_CASE_PANEL);

    // 7. Inject Synesthesia & Telemetry Engine module if not already included
    if (!html.includes('synesthesia.js')) {
      html = html.replace(
        '<script type="module" src="/wp-content/themes/piven/dist/assets/main-Cm-r6kin.js"></script>',
        '<script type="module" src="/wp-content/themes/piven/dist/assets/main-Cm-r6kin.js"></script>\n    <script type="module" src="/wp-content/themes/piven/dist/assets/synesthesia.js"></script>'
      );
    }

    await fs.writeFile(filePath, html, 'utf8');
    console.log(`[HTML] Updated ${rel}`);
  }

  // 7. Create/update static /work/<slug>/index.html routes from portfolio/index.html
  const portfolioHtml = await fs.readFile(path.join(PUBLIC_DIR, 'portfolio/index.html'), 'utf8');
  for (const route of CASE_ROUTES) {
    const dirPath = path.join(PUBLIC_DIR, 'work', route.slug);
    await fs.mkdir(dirPath, { recursive: true });
    const routeHtml = portfolioHtml.replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`);
    await fs.writeFile(path.join(dirPath, 'index.html'), routeHtml, 'utf8');
    console.log(`[ROUTE] Wrote work/${route.slug}/index.html`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
