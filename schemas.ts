import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "hero": z.object({
        "headline": z.string(),
        "subheadline": z.string(),
        "cta_primary": z.string(),
        "cta_secondary": z.string(),
        "trust_items": z.array(z.string())
      }),
      "philosophy": z.object({
        "pull_quote": z.string(),
        "pull_quote_attribution": z.string(),
        "principles": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "body": z.string()
        }))
      }),
      "services": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "description": z.string(),
          "featured": z.boolean()
        }))
      }),
      "credentials": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "pillars": z.array(z.object({
          "id": z.string(),
          "stat": z.string(),
          "label": z.string(),
          "detail": z.string()
        }))
      }),
      "cta": z.object({
        "headline": z.string(),
        "body": z.string(),
        "button": z.string()
      })
    }),
    patient_resources: z.object({
      "hero": z.object({
        "headline": z.string(),
        "subheadline": z.string()
      }),
      "first_appointment": z.object({
        "heading": z.string(),
        "intro": z.string(),
        "steps": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "body": z.string()
        }))
      }),
      "telehealth_setup": z.object({
        "heading": z.string(),
        "intro": z.string(),
        "steps": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "body": z.string()
        }))
      }),
      "faq": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "question": z.string(),
          "answer": z.string()
        }))
      })
    }),
    services: z.object({
      "hero": z.object({
        "headline": z.string(),
        "subheadline": z.string()
      }),
      "intro": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "services": z.array(z.object({
        "id": z.string(),
        "age_group": z.string(),
        "age_range": z.string(),
        "headline": z.string(),
        "description": z.string(),
        "conditions": z.array(z.string()),
        "approach": z.string(),
        "note": z.string()
      })),
      "approach": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "body": z.string()
        }))
      }),
      "cta": z.object({
        "headline": z.string(),
        "body": z.string(),
        "button": z.string()
      })
    }),
    contact: z.object({
      "hero": z.object({
        "headline": z.string(),
        "subheadline": z.string()
      }),
      "info": z.object({
        "telehealth_heading": z.string(),
        "telehealth_body": z.string(),
        "states_heading": z.string(),
        "states": z.array(z.string()),
        "response_heading": z.string(),
        "response_body": z.string(),
        "crisis_heading": z.string(),
        "crisis_body": z.string()
      })
    }),
    about: z.object({
      "hero": z.object({
        "headline": z.string(),
        "subheadline": z.string()
      }),
      "mission": z.object({
        "heading": z.string(),
        "body": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      }),
      "philosophy": z.object({
        "heading": z.string(),
        "subheading": z.string(),
        "body": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        })),
        "pillars": z.array(z.object({
          "id": z.string(),
          "label": z.string(),
          "description": z.string()
        }))
      }),
      "credentials": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "label": z.string(),
          "value": z.string()
        }))
      }),
      "values": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "body": z.string()
        }))
      }),
      "cta": z.object({
        "headline": z.string(),
        "body": z.string(),
        "button": z.string()
      })
    })
  }
};
export type Schemas = typeof schemas;