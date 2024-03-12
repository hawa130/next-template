import { useState } from 'react'
import {
  ComponentConfigForm,
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

type FormProps = {
  variant?: 'default' | 'line' | 'none'
}

export const TabsPreview = () => {
  const [props, setProps] = useState<FormProps>({
    variant: 'default',
  })

  const form = (
    <ComponentConfigForm<FormProps>
      items={[
        {
          name: 'variant',
          type: 'radio',
          options: ['default', 'line', 'none'],
          defaultValue: 'default',
        },
      ]}
      onChange={setProps}
    />
  )

  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Tabs</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2 mb-2" {...props}>
            <TabsTrigger value="login">Log in</TabsTrigger>
            <TabsTrigger value="signup">Sign up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <div className={cn(props.variant === 'default' && 'border rounded-xl shadow-sm')}>
              <div className="p-6">
                <h2 className="text-xl/none font-semibold">Welcome back</h2>
              </div>
              <div className="p-6 pt-0 space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="login-username" defaultValue="hawa130">Username</Label>
                  <Input id="login-username" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="login-password" defaultValue="hawa130">Password</Label>
                  <Input id="login-password" type="password" />
                </div>
              </div>
              <div className="p-6 pt-0">
                <Button variant="filled" color="primary">Log in</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="signup">
            <div className={cn(props.variant === 'default' && 'border rounded-xl shadow-sm')}>
              <div className="p-6">
                <h2 className="text-xl/none font-semibold">Create an account</h2>
              </div>
              <div className="p-6 pt-0 space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="signup-username">Username</Label>
                  <Input id="signup-username" defaultValue="hawa130" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input id="signup-password" type="password" defaultValue="hawa130" />
                </div>
                <div className="py-1 flex items-center space-x-2">
                  <Checkbox id="signup-terms" />
                  <Label htmlFor="signup-terms">Accept terms and conditions</Label>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Button variant="filled" color="primary">Sign up</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </ComponentPreviewCard>
    </section>
  )
}