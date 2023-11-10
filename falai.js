import * as fal from "@fal-ai/serverless-client";

const result = await fal.subscribe("54285744-illusion-diffusion", {
  "image_url": "https://storage.googleapis.com/falserverless/illusion-examples/pattern.png",
  "prompt": "(masterpiece:1.4), (best quality), (detailed), Medieval village scene with busy streets and castle in the distance",
  "negative_prompt": "(worst quality, poor details:1.4), lowres, (artist name, signature, watermark:1.4), bad-artist-anime, bad_prompt_version2, bad-hands-5, ng_deepnegative_v1_75t",
  "guidance_scale": 7.5,
  "controlnet_conditioning_scale": 1,
  "control_guidance_start": 0,
  "control_guidance_end": 1,
  "seed": 0,
  "scheduler": "Euler",
  "num_inference_steps": 40,
  "image_size": "square_hd"
},
  logs: true,
  onQueueUpdate: (update) => {
    if (update.status === "IN_PROGRESS") {
      update.logs.map((log) => log.message).forEach(console.log);
    }
  },
});
