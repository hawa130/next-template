import { Fragment, HTMLAttributes, JSX, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { repeat } from '@/lib/utils/repeat'

type SkeletonProps<TTagName extends keyof JSX.IntrinsicElements = 'div'> = {
	tagName?: TTagName
} & JSX.IntrinsicElements[TTagName]

export function Skeleton<TTagName extends keyof JSX.IntrinsicElements = 'div'>({
	tagName: Tag = 'div' as TTagName,
	className,
	...props
}: SkeletonProps<TTagName>) {
	// @ts-ignore
	return <Tag className={cn('animate-pulse rounded-md bg-primary/10', className)} {...props} />
}

/**
 * 文本骨架
 * @param chars em数，默认值为8，如果为`false`则不设置宽度
 * @param full 是否占满整行宽度
 */
type TextSkeletonProps = ({ chars?: number | false; full?: false } | { full: true; chars?: never }) &
	HTMLAttributes<HTMLSpanElement>
export function TextSkeleton({ className, chars, full, style, ...props }: TextSkeletonProps) {
	const mergedStyle = { ...style }
	if (!full && chars !== false) {
		mergedStyle.width ??= `${chars ?? 8}em`
	}

	return (
		// 最外层元素用于提供正确的行高
		// 内层用于提供灰块视觉的高度
		<span>
			<Skeleton
				tagName="span"
				className={cn(
					'-my-[.1em] inline-block max-w-full leading-[1.2] after:invisible after:content-["永"]',
					full && 'w-full',
					className,
				)}
				style={mergedStyle}
				{...props}
			/>
		</span>
	)
}

export function LinesSkeleton({ lines = 3 }: { lines?: number }): ReactNode {
	return [
		...repeat(lines - 1, (i) => (
			<Fragment key={i}>
				<TextSkeleton full />
				<br className="select-none" />
			</Fragment>
		)),
		<TextSkeleton key={lines} chars={false} className="w-2/3" />,
	]
}
